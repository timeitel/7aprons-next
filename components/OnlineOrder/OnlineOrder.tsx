import { useState } from "react";
import { domain, newOrder } from "@utils";
import { loadStripe } from "@stripe/stripe-js";
import { Form, Container, TotalValue } from "./styles";
import PulseLoader from "react-spinners/PulseLoader";
import { useForm } from "react-hook-form";
const stripePromise = loadStripe(
  "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX"
);

type StripeOrder = {
  price: string;
  quantity: number;
}[];

export const OnlineOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const watchAllFields = watch();
  console.log(watchAllFields);

  const handleStripeRedirect = async (data) => {
    setIsLoading(true);
    const lineItems: StripeOrder = Object.entries(data)
      .map(([price, quantity]) => ({
        price,
        quantity,
      }))
      .filter((d) => d.quantity > 0);
    const stripe = await stripePromise;

    if (lineItems.length === 0) {
      setIsLoading(false);
      setErrorMessage("Please select a dish quantity before checking out.");
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

  return (
    <>
      <Form onSubmit={handleSubmit(handleStripeRedirect)}>
        <Container>
          {newOrder
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
                      {...register(item.price, {
                        required: true,
                        valueAsNumber: true,
                        min: 0,
                        max: 100,
                      })}
                      type="number"
                      defaultValue="0"
                      style={{ maxWidth: "20%" }}
                    />
                  </div>
                  {errors[item.name] && (
                    <p className="text-red-500 text-right">
                      Please enter a dish quantity between 0 and 100.
                    </p>
                  )}
                  {item.week.toString().slice(-1) === "2" && (
                    <hr className="border-gray-200 my-4 text-center text-2xl w-full ml-auto" />
                  )}
                </div>
              );
            })}
          {errorMessage.length > 0 && (
            <p className="text-red-500 text-right">
              Please enter a dish quantity between 0 and 100.
            </p>
          )}
        </Container>

        {/* <TotalValue order={order} /> */}

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
