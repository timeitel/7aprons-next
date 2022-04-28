import { Button } from "@components/Button";
import { ButtonProps } from "@components/Button/types";
import { FC } from "react";
import styled from "styled-components";

export const PrimaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>;
};

const StyledPrimaryButton = styled(Button)`
  background-color: firebrick;
  color: white;

  width: ${(p) => (p.fullWidth ? "100%" : "auto")};

  &:hover {
    background: blue;
  }

  &:before {
    content: "";
    background: blue;
    position: absolute;
    width: 90%;
    height: 1px;
    bottom: 0;
    left: 5%;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
