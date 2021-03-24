import { useForm } from "react-hook-form";
import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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

const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  white-space: normal;
  text-align: end;

  @media (min-width: 768px) {
    label {
      white-space: nowrap;
    }
  }
`;

export default function OnlineOrder() {
  const [dishOne, setDishOne] = useState(0);
  const [dishTwo, setDishTwo] = useState(0);

  const order = () => {
    // eslint-disable-next-line no-undef
    var stripe = Stripe(
      "pk_test_51IUiTqDJrsoPxmlZ4eQXagZ4DZQL5PcmdQVA5G4WxWIPMSwWb79m4VqWhnN3bDk7pVDxIXPxkWv34F8fL53tL0kV00TdZK3vhX"
    );

    stripe
      .redirectToCheckout({
        lineItems: [
          {
            price: "price_1IXIWQDJrsoPxmlZEzydd92v",
            quantity: Number(dishOne),
          },
          {
            price: "price_1IV2I0DJrsoPxmlZZ0BcBLTt",
            quantity: Number(dishTwo),
          },
        ],
        mode: "payment",
        successUrl: "https://7aprons.com/success",
        cancelUrl: "https://7aprons.com/canceled",
      })
      .then(function (result) {
        if (result.error) {
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          order();
        }}
      >
        <FormGroup className="mb-4">
          <div className="flex flex-col items-end mr-4">
            <label className="text-lg font-medium">
              Chinese BBQ Pork served with hainan rice
            </label>
            <label>$8.50 each</label>
          </div>
          <input
            required
            value={dishOne}
            onChange={(e) => setDishOne(e.target.value)}
            type="number"
            min="0"
            max="100"
          />
        </FormGroup>

        <hr className="border-black my-4 text-center text-2xl w-full md:hidden ml-auto" />

        <FormGroup>
          <div className="flex flex-col items-end mr-4">
            <label className="text-lg font-medium">
              Roast chicken served with hainan rice
            </label>
            <label>$8.50 each</label>
          </div>
          <input
            required
            value={dishTwo}
            onChange={(e) => setDishTwo(e.target.value)}
            type="number"
            min="0"
            max="100"
          />
        </FormGroup>
        <hr className="border-black mt-4 text-center text-2xl w-full md:hidden ml-auto" />

        <div className="flex justify-end w-full my-4">
          <label className="text-md font-medium mr-4">Total</label>
          <div style={{ width: 92, textAlign: "start" }}>
            {(dishOne * 8.5 + dishTwo * 8.5).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>

        <input
          className="flex cursor-pointer ml-auto items-center justify-center whitespace-nowrap text-white font-bold px-6 rounded outline-none focus:outline-none mb-1 bg-blueGray-700 active:bg-blueGray-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          type="submit"
          value="Checkout"
          style={{ width: 145 }}
        />

        <div id="error-message"></div>
      </Form>
    </>
  );
}
