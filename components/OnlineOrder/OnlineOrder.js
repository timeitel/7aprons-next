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
  }

  select {
    border-radius: 4px;
    height: 40px;
    margin-bottom: 12px;
  }

  select:focus {
    outline: -webkit-focus-ring-color auto 1px;
    border-color: transparent;
  }
`;

export default function OnlineOrder() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input name="name" ref={register({ required: true })} />

      <label>Email</label>
      <input name="email" ref={register({ required: true })} />

      <label>Mobile</label>
      <input name="mobile" ref={register({ required: true })} />

      <label>Dishes</label>
      <select name="dishes" ref={register}>
        <option value="0">Chinese BBQ Pork served with Hainan rice</option>
        <option value="1">Roast chicken served with Hainan rice</option>
      </select>

      {errors.exampleRequired && <span>This field is required</span>}

      <input
        className="ml-auto flex items-center whitespace-nowrap get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
        type="submit"
      />
    </Form>
  );
}
