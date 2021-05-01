import { FC } from "react";
import styled from "styled-components";

export const Container = styled.div`
  max-height: 50vh;
  padding-right: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 80%;

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

type TotalValueProps = {
  order: any[];
};

export const TotalValue: FC<TotalValueProps> = ({ order }) => {
  return (
    <div className="flex justify-end w-full my-2">
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
  );
};
