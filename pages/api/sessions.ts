import { getSecret } from "common/utils/SecretHandler";
import { StorageService } from "services/StorageService";
import { getISOWeek } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";
const currentWeek = getISOWeek(new Date());
const folder = `${process.env.NODE_ENV}/week_${currentWeek}`;

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default function sessions(req: NextApiRequest, res: NextApiResponse) {
  runCheckout(req, res).catch((err) => {
    console.log(JSON.stringify(err));
    res.status(500).send("Server error");
  });
}

const runCheckout = async (req, res) => {
  const order = JSON.parse(req.body);
  const session = await getSessionId(order);
  await StorageService.save({ order, session }, `${folder}/${session.id}.json`);

  res.status(200).json({ sessionId: session.id });
};

const getSessionId = async ({ line_items, user }) => {
  const STRIPE = await getSecret("projects/1085191029669/secrets/stripe");
  const stripe = require("stripe")(STRIPE.API_KEY);

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
