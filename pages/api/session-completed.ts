import { buffer } from "micro";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { updateAccounting } from "../../utils/AccountingHandler";
import { getSecret } from "@utils/SecretHandler";

export const config = {
  api: {
    bodyParser: false,
  },
};

/**
 *
 * @param {!express:Request} req HTTP req context.
 * @param {!express:Response} res HTTP res context.
 */
export default async function sessionCompleted(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const STRIPE = await getSecret("STRIPE");
    const stripe = new Stripe(STRIPE.WH_SEC, null);
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, STRIPE.WH_SEC);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    const pi = event?.data?.object?.payment_intent;
    if (pi) {
      await updateAccounting(pi);
    }

    res.status(204).send("Ok");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
