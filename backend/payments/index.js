const moment = require("moment");
const { Storage } = require("@google-cloud/storage");
const isDebugging = process.env.NODE_ENV !== "production";
if (isDebugging) {
  require("dotenv").config();
}
const storage = new Storage();
const bucket = storage.bucket("seven_aprons_sessions");
const currentWeek = moment().format("W");
const folder = isDebugging
  ? `test/${currentWeek}`
  : `production/${currentWeek}`;
const stripe = require("stripe")(process.env.STRIPE_KEY);

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.payments = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    res.status(204).send("");
  }

  const message = JSON.parse(req.body);
  const { line_items } = message;
  const { id } = await getSessionId(line_items);
  await uploadSession(message, id);

  res.send({ sessionId: id });
};

const uploadSession = async (message, sessionId) => {
  const file = bucket.file(`${folder}/${sessionId}.json`);
  await file.save(JSON.stringify(message));

  console.log(`${sessionId} uploaded.`);
};

const getSessionId = async (line_items) => {
  const sessionObject = {
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `https://sevenaprons.com/success`,
    cancel_url: `https://sevenaprons.com/#order`,
  };

  return await stripe.checkout.sessions.create(sessionObject);
};
