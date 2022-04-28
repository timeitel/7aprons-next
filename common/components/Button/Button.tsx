import { FC } from "react";
import styled from "styled-components";
import { ButtonProps } from "./types";

export const Button: FC<ButtonProps> = ({
  startIcon,
  endIcon,
  children,
  href,
  ...rest
}) => {
  return (
    <StyledDefaultButton {...rest} as={href ? "a" : "button"} href={href}>
      {startIcon && <span style={{ margin: "0 8px 0 -4px" }}>{startIcon}</span>}
      {children}
      {endIcon && <span style={{ margin: "0 -4px 0 8px" }}>{endIcon}</span>}
    </StyledDefaultButton>
  );
};

const StyledDefaultButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: inherit;
  border-radius: 4px;
  border: none;
  color: inherit;
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.02857em;
  line-height: 1.75;
  position: relative;
  transition: background 0.25s ease-in 0.15s;

  padding: 0.5rem 2.5rem;

  ${(p) =>
    !p.disableHover &&
    `
  &:hover {
    background-color: grey;
  }
  `}
`;
