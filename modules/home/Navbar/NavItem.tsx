import { FC } from "react";
import styled from "styled-components";

interface Props {
  href: string;
  active: boolean;
}

export const NavItem: FC<Props> = ({ href, active, children }) => {
  return (
    <StyledLi className="flex items-center" active={active}>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-m uppercase font-bold"
        href={href}
      >
        {children}
      </a>
    </StyledLi>
  );
};

export const StyledLi = styled.li<{ active: boolean }>`
  position: relative;

  &:before {
    background: firebrick;
    content: "";
    position: absolute;
    height: 4px;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px 5px 0 0;
    visibility: ${(p) => (p.active ? "visible" : "hidden")};
    transform: ${(p) => (p.active ? "scaleX(1)" : "scaleX(0)")};
    transition: all 0.35s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
