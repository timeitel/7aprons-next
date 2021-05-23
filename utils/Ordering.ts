import { LineItem } from "types/Checkout";
import { getSecret } from "./SecretHandler";

export const getOrderStringFromLineItems = async (
  lineItems: LineItem[]
): Promise<string> => {
  let order = "";

  await Promise.all(
    lineItems.map(async (dish) => {
      const name = await getNameFromPrice(dish.price);
      order += `${dish.quantity} x ${name}\n`;
    })
  );

  return order.trim();
};

const getNameFromPrice = async (price: string): Promise<string> => {
  const STRIPE = await getSecret("projects/1085191029669/secrets/stripe");
  const stripe = require("stripe")(STRIPE.API_KEY);

  const { product } = await stripe.prices.retrieve(price);
  const { name } = await stripe.products.retrieve(product);

  return name;
};
