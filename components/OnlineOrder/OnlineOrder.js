import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";
import { OrderWeek } from "./OrderWeek";

const domain =
  process.env.NODE_ENV === "production"
    ? "https://7aprons.com"
    : "http://localhost:3000";

const WeeksContainer = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
  padding-right: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  input {
    border: 1px solid lightgray;
    border-radius: 4px;
    height: 40px;
    padding: 2px 8px;
  }

  select {
    border-radius: 4px;
    height: 40px;
    margin-bottom: 12px;
  }
`;

export default function OnlineOrder() {
  const [order, setOrder] = useState([
    {
      dishOne: 0,
      dishTwo: 0,
    },
    {
      dishOne: 0,
      dishTwo: 0,
    },
    {
      dishOne: 0,
      dishTwo: 0,
    },
    {
      dishOne: 0,
      dishTwo: 0,
    },
  ]);

  const handleSubmit = () => {
    // eslint-disable-next-line no-undef
    const stripe = Stripe(
      "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX"
    );
    const lineItems = [
      {
        price: "price_1IbMWxDJrsoPxmlZFgWiNsXy",
        quantity: 2,
      },
      {
        price: "price_1IbMXXDJrsoPxmlZbclacLTv",
        quantity: 2,
      },
    ].filter((i) => i.quantity > 0);
    console.log(lineItems);

    if (lineItems.length > 0) {
      stripe
        .redirectToCheckout({
          lineItems,
          mode: "payment",
          successUrl: `${domain}/success`,
          cancelUrl: `${domain}/#order`,
        })
        .then((result) => {
          if (result.error) {
            var displayError = document.getElementById("error-message");
            displayError.textContent = result.error.message;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <WeeksContainer>
          <OrderWeek
            dishOne="Thai Basil Minced Pork served with Steamed Rice"
            dishTwo="Sweet and Sour Fish served with Steamed Rice"
            orderByDate="April 5"
            deliveryDate="April 7"
            onChangeDishOne={(e) =>
              setOrder((prev) => ({
                ...prev,
                weekOne: { dishOne: e.target.value },
              }))
            }
            onChangeDishTwo={(e) =>
              setOrder((prev) => ({
                ...prev,
                weekOne: { dishTwo: e.target.value },
              }))
            }
          />

          <OrderWeek
            dishOne="Foo Yung Hai (Chinese Omelette) served with Steamed Rice"
            dishTwo="Indonesian Chicken Curry served with Turmeric Rice"
            orderByDate="April 12"
            deliveryDate="April 14"
          />

          <OrderWeek
            dishOne="Indonesian Beef Rendang served with Turmeric Rice"
            dishTwo="Fried chicken in sweet, buttery sauce, served with steamed rice"
            orderByDate="April 19"
            deliveryDate="April 21"
          />

          <OrderWeek
            dishOne="Indonesian Basil Stewed Pork Served with Steamed Rice"
            dishTwo="Assam Fish served with Steamed Rice"
            orderByDate="April 26"
            deliveryDate="April 28"
          />
        </WeeksContainer>

        {/* {errors.dishTwo && (
          <span className="text-sm text-red-600">This field is required</span>
        )} */}

        <div className="flex justify-end w-full my-4">
          <label className="text-md font-medium mr-4">Total</label>
          <div style={{ width: 92, textAlign: "start" }}>
            {(order[0].dishOne * 8.5 + order[0].dishTwo * 8.5).toLocaleString(
              "en-US",
              {
                style: "currency",
                currency: "USD",
              }
            )}
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
}
