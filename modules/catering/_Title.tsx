import { FC } from "react";

interface Props {}

export const Title: FC<Props> = ({ children }) => {
  return (
    <h6
      style={{
        marginBottom: 0,
        fontWeight: 500,
        textTransform: "uppercase",
      }}
    >
      {children}
    </h6>
  );
};
