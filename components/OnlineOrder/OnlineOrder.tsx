import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import "floating-label-react/styles.css";
import FloatingLabel from "floating-label-react";
import { newOrder } from "@utils";
import { loadStripe } from "@stripe/stripe-js";
import { Form, Container, TotalValue } from "./styles";
import PulseLoader from "react-spinners/PulseLoader";
import { useQuery } from "react-query";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export const OnlineOrder = () => {
  const [products, setProducts] = useState([]);
  const getProducts = useQuery(
    "getProducts",
    async () => {
      const res = await fetch("/api/products");
      return await res.json();
    },
    {
      onSuccess: ({ data }) => {
        const p = data.map(({ id, name, images, metadata }) => ({
          id,
          name,
          image: images[0],
          dishOrder: metadata.dishOrder,
        }));
        setProducts(p);
        console.log(products);
      },
    }
  );

  const [order, setOrder] = useState([...newOrder]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    company: "",
    deliveryAddress: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const stripe = await stripePromise;
    const lineItems = order
      .map(({ price, quantity }) => ({ price, quantity }))
      .filter((i) => i.quantity > 0);

    if (lineItems.length === 0) {
      setIsLoading(false);
      setErrorMessage(true);
      return;
    }

    const res = await fetch("/api/checkout", {
      method: "post",
      body: JSON.stringify({ user, line_items: lineItems }),
    });
    const json = await res.json();
    const { sessionId } = json;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
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
        <p
          className="font-medium w-full text-left"
          style={{ color: "#aa485d" }}
        >
          Order
        </p>
        <hr className="border-gray-200 mb-4 text-center text-2xl w-full ml-auto" />

        <Container>
          {order
            .sort((a, b) => a.order - b.order)
            .map((item) => {
              return (
                <div key={item.price}>
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
                </div>
              );
            })}
          <TotalValue order={order} />
          {errorMessage && (
            <p className="text-red-500 text-right mb-4">
              Please select a dish quantity to order.
            </p>
          )}

          <p
            className="font-medium w-1/2 text-left mt-6"
            style={{ color: "#aa485d" }}
          >
            Delivery details
          </p>
          <hr className="border-gray-200 mb-4 text-center text-2xl w-full ml-auto" />

          <InfoContainer>
            <FloatingLabel
              name="name"
              placeholder="Name"
              required
              value={user.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <FloatingLabel
              name="company"
              placeholder="Company"
              required
              value={user.company}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser((prev) => ({ ...prev, company: e.target.value }))
              }
            />
            <FloatingLabel
              name="email"
              placeholder="Email"
              type="email"
              required
              value={user.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <FloatingLabel
              name="deliveryAddress"
              placeholder="Delivery Address"
              type="deliveryAddress"
              required
              value={user.deliveryAddress}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUser((prev) => ({
                  ...prev,
                  deliveryAddress: e.target.value,
                }))
              }
            />
          </InfoContainer>

          <p className="text-left mt-4">
            Please note: we are currently only delivering to{" "}
            <strong>Perth CBD and Subiaco</strong>. We reserve the right to
            refund any orders outside this area.{" "}
          </p>

          <button
            className="flex mt-8 bg-primary h-10 cursor-pointer ml-auto items-center justify-center whitespace-nowrap text-white font-bold px-6 rounded outline-none focus:outline-none mb-1 bg-blueGray-700 active:bg-blueGray-600 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
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
        </Container>
      </Form>
    </>
  );
};

const InfoContainer = styled.div`
  width: 100%;
  columns: 2;
  /* display: flex;
  align-items: center;
  flex-wrap: wrap; */

  span {
    color: gray;
    padding-left: 4px;
  }

  .floating-label {
    margin-bottom: 8px;

    input {
      border: none !important;
      border-bottom: 1px solid gray !important;
      border-radius: 0 !important;
      padding-left: 8px !important;
      padding-top: 8px !important;
    }
  }
`;
