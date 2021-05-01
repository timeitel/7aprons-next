if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

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

  await storeSession(message, id);

  res.status(200).json({ id });
};

const storeSession = async (message, sessionId) => {
  console.log(user);
};
