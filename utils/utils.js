export const domain =
  process.env.NODE_ENV === "production"
    ? "https://timeitel.github.io/7aprons-next/"
    : "http://localhost:3000";

export const newOrder = [
  {
    dishOne: {
      price: "price_1IbMWxDJrsoPxmlZFgWiNsXy",
      quantity: 0,
    },
    dishTwo: {
      price: "price_1IbMXXDJrsoPxmlZbclacLTv",
      quantity: 0,
    },
  },
  {
    dishOne: {
      price: "",
      quantity: 0,
    },
    dishTwo: {
      price: "",
      quantity: 0,
    },
  },
  {
    dishOne: {
      price: "",
      quantity: 0,
    },
    dishTwo: {
      price: "",
      quantity: 0,
    },
  },
  {
    dishOne: {
      price: "",
      quantity: 0,
    },
    dishTwo: {
      price: "",
      quantity: 0,
    },
  },
];
