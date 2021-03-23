import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  input {
    border: 1px solid black;
    border-radius: 4px;
    margin-bottom: 12px;
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

  label {
    white-space: nowrap;
  }

  input {
    width: 80px;
  }
`;

export default function OnlineOrder() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="font-bold mb-8">
          Order by Monday, March 29, for Wednesday, March 24 delivery
        </h4>
        <FormGroup>
          <label className="text-lg font-medium mr-4">
            Chinese BBQ Pork served with hainan rice
          </label>
          <input type="number" min="0" max="100" />
        </FormGroup>

        <FormGroup>
          <label className="text-lg font-medium mr-4">
            Roast chicken served with hainan rice
          </label>
          <input type="number" min="0" max="100" />
        </FormGroup>

        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="flex cursor-pointer ml-auto items-center whitespace-nowrap text-white font-bold px-6 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          type="submit"
          value="Checkout"
        />
      </Form>
    </>
  );
}
