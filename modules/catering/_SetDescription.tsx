import { FlexColumn } from "@components/Flex";
import { Title } from "./_Title";
import { FC } from "react";
import { UList } from "./_UList";

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
        Nasi Tumpeng
      </h2>

      <Title>Turmeric rice set</Title>
      <UList>
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
      </UList>
      {/* <p style={{ marginBottom: "auto" }}>{price}</p> */}
    </FlexColumn>
  );
};
