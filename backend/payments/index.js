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

  const stripe = require("stripe")(process.env.STRIPE_KEY);

  const intent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: "aud",
    // Verify your integration in this guide by including this parameter
    metadata: { integration_check: "accept_a_payment" },
  });

  res.status(200).json({ client_secret: intent.client_secret });
};
