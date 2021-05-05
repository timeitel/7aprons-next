import { getISOWeek } from "date-fns";
import { Storage } from "@google-cloud/storage";
const storage = new Storage();
const bucket = storage.bucket("seven_aprons_sessions");
const currentWeek = getISOWeek(new Date());
console.log(new Date());
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
export default async function payments(req, res) {
  const message = JSON.parse(req.body);
  const { id } = await getSessionId(message.line_items);
  await uploadSession(message, id);

  res.status(200).json({ sessionId: id });
}

const getSessionId = async (line_items) => {
  const session = {
    payment_method_types: ["card"],
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

  console.log(`Session uploaded to ${location}`);
};
