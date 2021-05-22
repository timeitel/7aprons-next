import { getSecret } from "@utils/SecretHandler";
import { getWeekOfMonth } from "date-fns";

/**
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
export default async function getProducts(req, res) {
  try {
    await runGetProducts(req, res);
  } catch (err) {
    console.log(JSON.stringify(err));
    res.status(500).send("Server error");
  }
}

const runGetProducts = async (req, res) => {
  const STRIPE = await getSecret("projects/1085191029669/secrets/stripe");
  const stripe = require("stripe")(STRIPE.API_KEY);
  const { data } = await stripe.products.list();
  const currentWeek = getWeekOfMonth(new Date(), {
    weekStartsOn: 2,
  });

  const availableDishes = data
    .filter((d) => d.active)
    .filter((d) => d.metadata.dishOrder > currentWeek);
  res.status(200).json(availableDishes);
};
