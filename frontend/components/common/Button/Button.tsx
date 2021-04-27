import { Children } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";

const StyledButton = styled.button`
  background: ${(props) => props.primary && "#AA485D"};
  background: ${(props) => props.secondary && "#C4CBCA"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const Button = ({ isLoading = false, children, ...rest }) => {
  return (
    <StyledButton
      className="flex bg-primary h-10 cursor-pointer ml-auto items-center justify-center whitespace-nowrap text-white font-bold px-6 rounded outline-none focus:outline-none mb-1 active:bg-blueGray-600 text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <PulseLoader color={"#fff"} size={10} /> : <>{children}</>}
    </StyledButton>
  );
};
