import { FC } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

export const Item: FC<Props> = ({ src, description, title }) => {
  return (
    <div>
      <img
        src={src || "images/landing-food.jpg"}
        className="align-middle"
        style={{
          borderRadius: "0.5rem",
          objectFit: "cover",
          marginBottom: "0.5rem",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: 700, marginBottom: "0", lineHeight: 0.85 }}>
          {title || "Babi Woku"}
        </span>
        <p> {description || "Woku pork"}</p>
      </div>
    </div>
  );
};
