import { getISOWeek } from "date-fns";
import { Storage } from "@google-cloud/storage";
const storage = new Storage();
const bucketName = "seven_aprons_sessions";
const bucket = storage.bucket(bucketName);
const currentWeek = getISOWeek(new Date());
const folder =
  process.env.NODE_ENV === "development"
    ? `test/week_${currentWeek}`
    : `production/week_${currentWeek}`;
const stripe = require("stripe")(process.env.STRIPE_KEY_SECRET);
/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default async function checkout(req, res) {
  try {
    const message = JSON.parse(req.body);
    const { id: sessionId } = await getSessionId(message);
    await uploadSession(message, sessionId);

    res.status(200).json({ sessionId });
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

const getSessionId = async ({ line_items, user }) => {
  const session = {
    payment_method_types: ["card"],
    customer_email: user.email,
    line_items,
    mode: "payment",
    success_url: `https://sevenaprons.com/success`,
    cancel_url: `https://sevenaprons.com/#order`,
  };

  return await stripe.checkout.sessions.create(session);
};

const uploadSession = async (message, sessionId) => {
  const location = `${folder}/${sessionId}.json`;
  const file = bucket.file(location);
  await file.save(JSON.stringify(message));

  console.log(
    JSON.stringify({
      message: "Session uploaded",
      location: `https://storage.cloud.google.com/${bucketName}/${location}`,
    })
  );
};
