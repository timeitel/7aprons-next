const isDebugging = process.env.NODE_ENV !== "production";
export const domain =
  process.env.NODE_ENV === "production"
    ? "https://sevenaprons.com"
    : "http://localhost:3000";

export const newOrder = [
  {
    name: "Grilled Javanese Chicken Served with Steamed Rice",
    price: isDebugging
      ? "price_1IerSEDJrsoPxmlZLyOxtcOA"
      : "price_1IhaqrDJrsoPxmlZMK1x4PA4",
    quantity: 0,
    order: 1,
  },
  {
    name: "Indonesian Turmeric Fish Served with Steamed Rice",
    price: isDebugging
      ? "price_1IerQVDJrsoPxmlZsbYuG7yZ"
      : "price_1IhapyDJrsoPxmlZaJpFWcwR",
    quantity: 0,
    order: 2,
  },
];
