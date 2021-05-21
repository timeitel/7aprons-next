import { Storage } from "@google-cloud/storage";
import { getISOWeek } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";
const storage = new Storage();
const bucketName = "seven_aprons_sessions";
const bucket = storage.bucket(bucketName);
const currentWeek = getISOWeek(new Date());
const folder = `${process.env.NODE_ENV}/week_${currentWeek}`;

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default function checkout(req: NextApiRequest, res: NextApiResponse) {
  runCheckout(req, res).catch((err) => {
    console.log(JSON.stringify(err));
    res.status(500).send("Server error");
  });
}

const runCheckout = async (req, res) => {
  const message = JSON.parse(req.body);
  const sessionRes = await getSessionId(message);
  console.log(sessionRes);
  await uploadSession(message, res.id);

  res.status(200).json({ sessionId: res.id });
};

const getSessionId = async ({ line_items, user }) => {
  // TODO: secret manager
  const stripe = require("stripe")(process.env.STRIPE_KEY_SECRET);

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

export const uploadSession = async (message, sessionId) => {
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
