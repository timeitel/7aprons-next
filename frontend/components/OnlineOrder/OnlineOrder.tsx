import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { domain, newOrder } from "@utils";
import { Form, Container, TotalValue } from "./styles";
import PulseLoader from "react-spinners/PulseLoader";
const stripePromise = loadStripe(
  "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX"
);

export const OnlineOrder = () => {
  const [order, setOrder] = useState([...newOrder]);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   const stripe = await stripePromise;
  //   const lineItems = order
  //     .map(({ price, quantity }) => ({ price, quantity }))
  //     .filter((i) => i.quantity > 0);

  //   if (lineItems.length === 0) {
  //     setIsLoading(false);
  //     setErrorMessage(true);
  //     return;
  //   }

  //   const { error } = await stripe.redirectToCheckout({
  //     lineItems,
  //     mode: "payment",
  //     successUrl: `${domain}/success`,
  //     cancelUrl: `${domain}/#order`,
  //     billingAddressCollection: "required",
  //   });

  //   if (error) console.log(error);

  //   setIsLoading(false);
  // };

  const handleItemUpdate = (e, item) => {
    const val = e.target.value;
    if (e.target.validity.valid || val === "") {
      const updatedItem = { ...item, quantity: Number(e.target.value) };
      const newOrder = order.filter((i) => i.price !== updatedItem.price);
      newOrder.push(updatedItem);
      setOrder(newOrder);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        console.log("Payment succeeded");
      }
    }
  };

  const getPaymentIntent = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(process.env.NEXT_PUBLIC_CHECKOUT_API);
      const json = await res.json();
      setPaymentIntent(json.client_secret);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Elements stripe={stripePromise}>
        <Form onSubmit={handleSubmit}>
          <Container>
            <label>
              Card details
              <CardElement />
            </label>
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
                        name={item.name}
                        value={item.quantity}
                        type="number"
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

          {errorMessage && (
            <p className="text-red-500 text-right mb-4">
              Please select a dish quantity to order.
            </p>
          )}

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
      </Elements>
    </>
  );
};
