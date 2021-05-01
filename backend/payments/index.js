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
  res.set("Access-Control-Allow-Methods", "GET, POST");

  if (req.method === "OPTIONS") {
    /* handle preflight OPTIONS request */
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Max-Age", "3600");
    return res.sendStatus(204);
  }

  const { body: message } = req;

  const { id } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: message.line_items,
    mode: "payment",
    success_url: `https://sevenaprons.com/success`,
    cancel_url: `https://sevenaprons.com/#order`,
  });

  await storeSession(message, id).catch(console.error);

  res.status(200).json({ id });
};

const storeSession = async (message, sessionId) => {
  const file = bucket.file(`${folder}/${sessionId}.json`);
  await file.save(JSON.stringify(message));

  console.log(`${sessionId} uploaded.`);
};
