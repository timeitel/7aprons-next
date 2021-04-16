import { useState } from "react";
import { domain, newOrder } from "@utils";
import { loadStripe } from "@stripe/stripe-js";
import { Form, Container, TotalValue } from "./styles";
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

  const handleItemUpdate = (e, item) => {
    const val = e.target.value;
    if (e.target.validity.valid || val === "") {
      const updatedItem = { ...item, quantity: Number(e.target.value) };
      const newOrder = order.filter((i) => i.price !== updatedItem.price);
      newOrder.push(updatedItem);
      setOrder(newOrder);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          {order
            .sort((a, b) => a.week - b.week)
            .map((item) => {
              return (
                <div key={item.price}>
                  {item.week.toString().slice(-1) === "1" && (
                    <label className="mb-4 block text-right">
                      {item.orderAndDelivery}
                    </label>
                  )}
                  <div className="flex items-center justify-end mb-2">
                    <div className="flex flex-col items-end mr-4">
                      <label className="text-md text-right font-medium">
                        {item.name}
                      </label>
                      <label>$8.50 each</label>
                    </div>
                    <input
                      value={item.quantity}
                      type="tel"
                      pattern="^-?[0-9]\d*\.?\d*$"
                      min="0"
                      max="100"
                      onChange={(e) => handleItemUpdate(e, item)}
                      style={{ maxWidth: "20%" }}
                    />
                  </div>
                  {item.week.toString().slice(-1) === "2" && (
                    <hr className="border-gray-200 my-4 text-center text-2xl w-full ml-auto" />
                  )}
                </div>
              );
            })}
        </Container>

        <TotalValue order={order} />

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
