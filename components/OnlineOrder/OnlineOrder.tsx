import { useState } from "react";
import { OrderWeek } from "./OrderWeek";
import { domain, newOrder } from "@utils";
import { loadStripe } from "@stripe/stripe-js";
import { Form, WeeksContainer } from "./styles";
import { LineItem } from "./LineItem";
const stripePromise = loadStripe(
  "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX"
);

export const OnlineOrder = () => {
  const [order, setOrder] = useState([...newOrder]);

  const handleSubmit = async () => {
    const stripe = await stripePromise;
    const lineItems = order
      .map(({ price, quantity }) => ({ price, quantity }))
      .filter((i) => i.quantity > 0);
    console.log(lineItems);

    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: `${domain}/success`,
      cancelUrl: `${domain}/#order`,
    });
  };

  const handleItemUpdate = (updatedItem) => {
    const newOrder = [...order];
    newOrder[weekNumber].dishOne.quantity = weekOrder.dishOneQuantity;
    newOrder[weekNumber].dishTwo.quantity = weekOrder.dishTwoQuantity;
    setOrder(newOrder);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <WeeksContainer>
          {order.map((item) => {
            <LineItem item={item} onItemUpdate={handleItemUpdate} />;
          })}
          <OrderWeek
            dishOne="Foo Yung Hai (Chinese Omelette) served with Steamed Rice"
            dishTwo="Indonesian Chicken Curry served with Turmeric Rice"
            orderByDate="April 12"
            deliveryDate="April 14"
            onOrderUpdate={(o) => handleOrderUpdate(o)}
          />

          <OrderWeek
            dishOne="Indonesian Beef Rendang served with Turmeric Rice"
            dishTwo="Fried chicken in sweet, buttery sauce, served with steamed rice"
            orderByDate="April 19"
            deliveryDate="April 21"
            onOrderUpdate={(o) => handleOrderUpdate(o)}
          />

          <OrderWeek
            dishOne="Indonesian Basil Stewed Pork Served with Steamed Rice"
            dishTwo="Assam Fish served with Steamed Rice"
            orderByDate="April 26"
            deliveryDate="April 28"
            onOrderUpdate={(o) => handleOrderUpdate(o)}
          />
        </WeeksContainer>

        {/* {errors.dishTwo && (
          <span className="text-sm text-red-600">This field is required</span>
        )} */}

        <div className="flex justify-end w-full my-4">
          <label className="text-md font-medium mr-4">Total</label>
          <div style={{ width: 92, textAlign: "start" }}>
            {order
              .reduce((total, o) => {
                return (
                  total +
                  8.5 * Number(o.dishOne.quantity) +
                  8.5 * Number(o.dishTwo.quantity)
                );
              }, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </div>
        </div>

        <input
          className="flex bg-primary cursor-pointer ml-auto items-center justify-center whitespace-nowrap text-white font-bold px-6 rounded outline-none focus:outline-none mb-1 bg-blueGray-700 active:bg-blueGray-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          type="submit"
          value="Checkout"
          style={{ width: 145 }}
        />
      </Form>
    </>
  );
};
