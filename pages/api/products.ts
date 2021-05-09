const stripe = require("stripe")(process.env.STRIPE_KEY_SECRET);

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default async function getProducts(req, res) {
  try {
    await runGetProducts(req, res);
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

const runGetProducts = async (req, res) => {
  const products = await stripe.products.list();
  res.status(200).json(products);
};
