import { NavItem } from "modules/home/Navbar/NavItem";
import { FC } from "react";
import styled from "styled-components";

interface Props {}

export const NavList: FC<Props> = ({}) => {
  return (
    <StyledList>
      <NavItem href={"/"}>Home</NavItem>
      <NavItem href={"/heat-and-eat"}>Heat & eat meals</NavItem>
      <NavItem href={"catering"}>Catering</NavItem>
      <NavItem href={"wholesale"}>Wholesale</NavItem>
      <NavItem href={"/#contact"}>Contact</NavItem>
    </StyledList>
  );
};

export const StyledList = styled.ul`
  li:not(:last-child) {
    margin-right: 4.25rem;
  }
`;
StyledList.defaultProps = {
  className: "flex flex-col lg:flex-row list-none lg:ml-auto",
};
