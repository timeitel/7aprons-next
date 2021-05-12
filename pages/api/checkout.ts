import type { NextApiRequest, NextApiResponse } from "next";
import { SecretManagerServiceClient } from "@google-cloud/secret-manager";
import { PubSub } from "@google-cloud/pubsub";
const client = new SecretManagerServiceClient();

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
  const { id: sessionId } = await getSessionId(message);
  await publishMessage({ message, sessionId });

  res.status(200).json({ sessionId });
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

const publishMessage = async (message) => {
  const pubsub = new PubSub();
  const dataBuffer = Buffer.from(JSON.stringify(message));

  const messageId = await pubsub.topic("sessions").publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
};

async function getSecret() {
  const name = "projects/1085191029669/secrets/TEST";

  const secret = await client.getSecret({
    name,
  });

  console.log(`Secret: ${secret.toString()}`);
}
