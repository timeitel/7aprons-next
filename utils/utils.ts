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

export const StripeApiKey = () => {
  return process.env.NODE_ENV === "production"
    ? "pk_live_51IUiTqDJrsoPxmlZqIAc3xxl6Z7KOq5mfqaOjZsYuodhykaBbWGLDgwZdNL8QJIxaS0Kvg9YuIvQd0veFEGkxCZo00dxv3XBL3"
    : "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX";
};
