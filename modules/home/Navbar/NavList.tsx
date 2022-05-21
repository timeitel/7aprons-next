import { NavItem } from "modules/home/Navbar/NavItem";
import { FC } from "react";
import styled from "styled-components";

interface Props {
  activePath: string;
}

export const NavList: FC<Props> = ({ activePath }) => {
  const navListItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/heat-and-eat",
      label: "Heat & eat meals",
    },
    {
      path: "/catering",
      label: "Catering",
    },
    {
      path: "/wholesale",
      label: "Wholesale",
    },
  ];

  return (
    <StyledList>
      {navListItems.map((x) => (
        <NavItem href={x.path} active={activePath === x.path} key={x.path}>
          {x.label}
        </NavItem>
      ))}
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
