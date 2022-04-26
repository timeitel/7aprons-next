import { FC } from "react";

interface Props {
  href: string;
}

export const NavItem: FC<Props> = ({ href, children }) => {
  return (
    <li className="flex items-center">
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-m uppercase font-bold"
        href={href}
      >
        {children}
      </a>
    </li>
  );
};
