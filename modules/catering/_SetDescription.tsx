import { FlexColumn } from "@components/Flex";
import { FC } from "react";

export const SetDescription: FC = () => {
  return (
    <FlexColumn>
      <h2
        style={{
          marginBottom: "0.125rem",
          fontWeight: 700,
          fontSize: "2rem",
          textTransform: "uppercase",
        }}
      >
        testig
      </h2>
      <h6
        style={{
          marginBottom: "1rem",
          fontWeight: 500,
          fontSize: "1.25rem",
          color: "grey",
          textTransform: "uppercase",
        }}
      >
        subtitle
      </h6>
      <ul
        style={{
          listStyleType: "disc",
          listStylePosition: "inside",
          paddingLeft: "0.25rem",
          marginBottom: "1rem",
        }}
      >
        {/* {description.map((x) => (
          <li key={x.text}>
            {x.text}
            {x.children?.length > 0 && (
              <ul
                style={{
                  listStyleType: "disc",
                  listStylePosition: "inside",
                  paddingLeft: "0.25rem",
                  marginLeft: "1.25rem",
                }}
              >
                {x.children.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            )}
          </li>
        ))} */}
      </ul>
      {/* <p style={{ marginBottom: "auto" }}>{price}</p> */}
    </FlexColumn>
  );
};
