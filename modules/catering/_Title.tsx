import { FC } from "react";

interface Props {}

export const Title: FC<Props> = ({ children }) => {
  return (
    <h6
      style={{
        marginBottom: "1rem",
        fontWeight: 500,
        fontSize: "1.125rem",
        color: "grey",
        textTransform: "uppercase",
      }}
    >
      {children}
    </h6>
  );
};
