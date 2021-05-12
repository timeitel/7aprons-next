const stripe = require("stripe")(process.env.STRIPE_KEY_SECRET);

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default function getProducts(req, res) {
  runGetProducts(req, res).catch((err) => {
    console.log(JSON.stringify(err));
    res.status(500).send("Server error");
  });
}

const runGetProducts = async (req, res) => {
  const products = await stripe.products.list();
  res.status(200).json(products);
};
