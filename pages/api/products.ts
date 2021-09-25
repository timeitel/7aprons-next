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
  const weekOfMonth = getWeekOfMonth(new Date(), {
    weekStartsOn: 2,
  });
  const currentWeek = weekOfMonth % 5;
  console.log("current week: ", currentWeek);

  const availableDishes = data
    .filter((d) => d.active)
    .filter((d) => getProductWeek(d) === currentWeek);

  res.status(200).json(availableDishes);
};

const getProductWeek = (product: any) => {
  const week = Math.floor(Number(product.metadata.dishOrder));

  return week;
};
