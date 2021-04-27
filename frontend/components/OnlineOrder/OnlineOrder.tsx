import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import StepWizard from "react-step-wizard";
import { domain, newOrder } from "@utils";
import { Form, Container, TotalValue, CARD_ELEMENT_OPTIONS } from "./styles";
import { Stats } from "./helpers";

export const OnlineOrder = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(paymentIntent, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Tim EItel",
        },
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
    <Form onSubmit={handleSubmit}>
      <Container>
        <StepWizard>
          <First />
          <Second />
          <Third />
        </StepWizard>
      </Container>

      {errorMessage && (
        <p className="text-red-500 text-right mb-4">
          Please select a dish quantity to order.
        </p>
      )}
    </Form>
  );
};

const First = (props) => {
  const [order, setOrder] = useState([...newOrder]);

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
      <Stats step={1} {...props} />
    </>
  );
};

const Third = (props) => {
  return (
    <>
      <label>Testing</label>
      <label>Testing</label>
      <label>Testing</label>
      <Stats step={3} {...props} />
    </>
  );
};

const Second = (props) => {
  return (
    <>
      <label>Testing</label>
      <label>Testing</label>
      <label>Testing</label>
      <Stats step={2} {...props} />
    </>
  );
};
