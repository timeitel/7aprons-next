export type Order = {
  user: {
    name: string;
    email: string;
    company: string;
    deliveryAddress: string;
  };
  line_items: LineItem[];
};

export type LineItem = {
  price: string;
  quantity: number;
};
