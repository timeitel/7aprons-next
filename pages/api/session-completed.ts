import { buffer } from "micro";
import Stripe from "stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { updateAccounting } from "../../services/AccountingServce";
import { getSecret } from "common/utils/SecretHandler";
import { StorageService } from "services/StorageService";

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
    const STRIPE = await getSecret("projects/1085191029669/secrets/stripe");
    const stripe = new Stripe(STRIPE.WH_SEC, null);
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(buf, sig, STRIPE.WH_SECRET);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    if (event.type === "checkout.session.completed") {
      const cs_id = event.data.object.id;
      const checkoutSession = await StorageService.find(cs_id);
      if (!checkoutSession.error) {
        await updateAccounting(checkoutSession.order);
      }
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
