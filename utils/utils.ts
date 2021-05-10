const isDebugging = process.env.NODE_ENV !== "production";
export const domain =
  process.env.NODE_ENV === "production"
    ? "https://sevenaprons.com"
    : "http://localhost:3000";

export const newOrder = [
  {
    name: "Chicken Fried Noodle",
    price: isDebugging
      ? "price_1IerSEDJrsoPxmlZLyOxtcOA"
      : "price_1IhasADJrsoPxmlZwx8tl3px",
    quantity: 0,
    order: 1,
  },
  {
    name: "Stir-fry Black Pepper Beef Served with Steamed Rice",
    price: isDebugging
      ? "price_1IerQVDJrsoPxmlZsbYuG7yZ"
      : "price_1IharaDJrsoPxmlZ53xSu407",
    quantity: 0,
    order: 2,
  },
];
