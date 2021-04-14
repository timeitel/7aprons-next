import { useState } from "react";
import { domain, newOrder } from "@utils";
import { loadStripe } from "@stripe/stripe-js";
import { Form, WeeksContainer } from "./styles";
import { LineItem } from "./LineItem";
import PulseLoader from "react-spinners/PulseLoader";
const stripePromise = loadStripe(
  "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX"
);

export const OnlineOrder = () => {
  const [order, setOrder] = useState([...newOrder]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const stripe = await stripePromise;
    const lineItems = order
      .map(({ price, quantity }) => ({ price, quantity }))
      .filter((i) => i.quantity > 0);

    console.log(lineItems);

    if (lineItems.length === 0) {
      setIsLoading(false);
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: "payment",
      successUrl: `${domain}/success`,
      cancelUrl: `${domain}/#order`,
      billingAddressCollection: "required",
    });

    if (error) console.log(error);

    setIsLoading(false);
  };

  const handleItemUpdate = (updatedItem) => {
    const newOrder = order.filter((i) => i.price !== updatedItem.price);
    newOrder.push(updatedItem);
    setOrder(newOrder);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <WeeksContainer>
          {order
            .sort((a, b) => a.week - b.week)
            .map((item) => {
              return (
                <LineItem
                  item={item}
                  key={item.price}
                  onItemUpdate={(i) => handleItemUpdate(i)}
                />
              );
            })}
        </WeeksContainer>

        <div className="flex justify-end w-full my-4">
          <label className="text-md font-medium mr-4">Total</label>
          <div style={{ width: 92, textAlign: "start" }}>
            {order
              .reduce((total, o) => {
                return total + 8.5 * Number(o.quantity);
              }, 0)
              .toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
          </div>
        </div>
        <p className="mb-4 w-100 md:w-50">
          Please note: we are currently only delivering within the Perth
          Metropolitan region and reserve the right to refund any orders outside
          this area.
        </p>

        <button
          className="flex bg-primary h-10 cursor-pointer ml-auto items-center justify-center whitespace-nowrap text-white font-bold px-6 rounded outline-none focus:outline-none mb-1 bg-blueGray-700 active:bg-blueGray-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          style={{ width: 145 }}
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <PulseLoader color={"#fff"} size={10} />
          ) : (
            <span>Checkout</span>
          )}
        </button>
      </Form>
    </>
  );
};
