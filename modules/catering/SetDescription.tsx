import { PrimaryButton } from "@components/Button/PrimaryButton";
import { FlexColumn } from "@components/Flex";
import { ICateringSet } from "modules/catering/CateringSetList";
import { FC } from "react";

interface Props extends Omit<ICateringSet, "imagePath"> {
  price: string;
  hideCta?: boolean;
}

export const SetDescription: FC<Props> = ({
  description,
  subtitle,
  title,
  price,
  hideCta = false,
}) => {
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
        {title}
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
        {subtitle}
      </h6>
      <ul
        style={{
          listStyleType: "disc",
          listStylePosition: "inside",
          paddingLeft: "0.25rem",
          marginBottom: "1rem",
        }}
      >
        {description.map((x) => (
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
        ))}
      </ul>
      <p style={{ marginBottom: "auto" }}>{price}</p>
      {!hideCta && (
        <>
          <PrimaryButton style={{ marginBottom: "0.5rem" }}>
            Place Order
          </PrimaryButton>
          <p>
            OR FOR CUSTOM ORDERS, <strong>ENQUIRE BELOW!</strong>
          </p>
        </>
      )}
    </FlexColumn>
  );
};
