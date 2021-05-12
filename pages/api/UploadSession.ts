import { Storage } from "@google-cloud/storage";
import { getISOWeek } from "date-fns";
const storage = new Storage();
const bucketName = "seven_aprons_sessions";
const bucket = storage.bucket(bucketName);
const currentWeek = getISOWeek(new Date());
const folder =
  process.env.NODE_ENV === "production"
    ? `production/week_${currentWeek}`
    : `test/week_${currentWeek}`;

export const uploadSession = async (req, res) => {
  if (!req.body) {
    const msg = "no Pub/Sub message received";
    console.error(`error: ${msg}`);
    res.status(400).send(`Bad Request: ${msg}`);
    return;
  }
  if (!req.body.message) {
    const msg = "invalid Pub/Sub message format";
    console.error(`error: ${msg}`);
    res.status(400).send(`Bad Request: ${msg}`);
    return;
  }

  const pubSubMessage = req.body.message;
  const { message, sessionId } = JSON.parse(
    Buffer.from(pubSubMessage.data, "base64").toString().trim()
  );

  const fileName = `${folder}/${sessionId}.json`;
  const file = bucket.file(fileName);
  await file.save(JSON.stringify(message));

  console.log(
    JSON.stringify({
      message: "Session uploaded",
      location: `https://storage.cloud.google.com/${bucketName}/${fileName}`,
    })
  );
};
