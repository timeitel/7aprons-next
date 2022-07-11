import { IKnownColors } from "@styles/theme";
import { FC } from "react";

interface Props {}

export const UList: FC<Props> = ({ children }) => {
  return (
    <ul
      style={{
        listStyleType: "disc",
        listStylePosition: "inside",
        paddingLeft: "0.25rem",
        marginBottom: "1rem",
        color: IKnownColors.grey200,
      }}
    >
      {children}
    </ul>
  );
};
