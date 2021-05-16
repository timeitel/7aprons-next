import { getWeekOfMonth } from "date-fns";

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
  const { data } = await stripe.products.list();
  const currentWeek = getWeekOfMonth(new Date(), {
    weekStartsOn: 2,
  });

  const availableDishes = data.filter(
    (d) => d.metadata.dishOrder > currentWeek
  );
  res.status(200).json(availableDishes);
};
