export const domain =
  process.env.NODE_ENV === "production"
    ? "https://sevenaprons.com"
    : "http://localhost:3000";

export const newOrder = [
  {
    name: "Indonesian Chicken Curry served with Turmeric Rice",
    price: "price_1IbMYcDJrsoPxmlZhyH5ecPO",
    quantity: 0,
    week: 2.1,
    orderAndDelivery:
      "Order by Monday, April 12, for Wednesday, April 14 delivery",
  },
  {
    name: "Foo Yung Hai (Chinese Omelette) served with Steamed Rice",
    price: "price_1IbMY6DJrsoPxmlZR9lhMmHO",
    quantity: 0,
    week: 2.2,
    orderAndDelivery:
      "Order by Monday, April 12, for Wednesday, April 14 delivery",
  },
  {
    name: "Fried chicken in sweet, buttery sauce, served with steamed rice",
    price: "price_1IbMZtDJrsoPxmlZZzSTBUUz",
    quantity: 0,
    week: 3.1,
    orderAndDelivery:
      "Order by Monday, April 19, for Wednesday, April 21 delivery",
  },
  {
    name: "Indonesian Beef Rendang served with Turmeric Rice",
    price: "price_1IbMZADJrsoPxmlZgmpkGtw0",
    quantity: 0,
    week: 3.2,
    orderAndDelivery:
      "Order by Monday, April 19, for Wednesday, April 21 delivery",
  },
  {
    name: "Assam Fish served with Steamed Rice",
    price: "price_1IbMagDJrsoPxmlZbmz5mP7k",
    quantity: 0,
    week: 4.1,
    orderAndDelivery:
      "Order by Monday, April 26, for Wednesday, April 28 delivery",
  },
  {
    name: "Indonesian Basil Stewed Pork Served with Steamed Rice",
    price: "price_1IbMaIDJrsoPxmlZiKly5j7c",
    quantity: 0,
    week: 4.2,
    orderAndDelivery:
      "Order by Monday, April 26, for Wednesday, April 28 delivery",
  },
];
