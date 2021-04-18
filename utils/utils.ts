export const domain =
  process.env.NODE_ENV === "production"
    ? "https://sevenaprons.com"
    : "http://localhost:3000";

export const newOrder = [
  {
    name: "Fried chicken in sweet, buttery sauce, served with steamed rice",
    price: "price_1IharaDJrsoPxmlZ53xSu407",
    quantity: 0,
    week: 3.1,
    orderAndDelivery:
      "Order by Monday, April 19, for Wednesday, April 21 delivery",
  },
  {
    name: "Indonesian Beef Rendang served with Turmeric Rice",
    price: "price_1IhasADJrsoPxmlZwx8tl3px",
    quantity: 0,
    week: 3.2,
    orderAndDelivery:
      "Order by Monday, April 19, for Wednesday, April 21 delivery",
  },
  {
    name: "Assam Fish served with Steamed Rice",
    price: "price_1IhapyDJrsoPxmlZaJpFWcwR",
    quantity: 0,
    week: 4.1,
    orderAndDelivery:
      "Order by Monday, April 26, for Wednesday, April 28 delivery",
  },
  {
    name: "Indonesian Basil Stewed Pork Served with Steamed Rice",
    price: "price_1IhaqrDJrsoPxmlZMK1x4PA4",
    quantity: 0,
    week: 4.2,
    orderAndDelivery:
      "Order by Monday, April 26, for Wednesday, April 28 delivery",
  },
];

export const deliveryList = ["", ""];
