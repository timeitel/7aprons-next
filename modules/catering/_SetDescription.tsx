import { FlexColumn } from "@components/Flex";
import { Title } from "./_Title";
import { FC } from "react";
import { UList } from "./_UList";
import { IKnownColors } from "@styles/theme";

export const SetDescription: FC = () => {
  return (
    <FlexColumn>
      <h2
        style={{
          marginBottom: "0.5rem",
          fontWeight: 700,
          fontSize: "2rem",
          textTransform: "uppercase",
        }}
      >
        Nasi Tumpeng
      </h2>

      <Title>Turmeric rice set</Title>
      <p style={{ color: IKnownColors.grey200, marginBottom: "1rem" }}>
        $17 per head (min. order 20pax)
      </p>

      <Title>Standard inclusions</Title>
      <UList>
        <li>Turmeric rice</li>
        <li>Fried noodle</li>
        <li>Sambal egg</li>
        <li>Potato crispies with nuts and anchovies </li>
      </UList>

      <Title>Choice of 1x protein</Title>
      <UList>
        <li>
          Chicken (fried/grilled) with your choice of sauce (sweet soy
          sauce/grilled javanese style){" "}
        </li>
        <li>Beef (rendang/grilled/chilli)</li>
      </UList>

      <Title>Choice of veg</Title>
      <UList>
        <li>Braised beans</li>
        <li>Tofu</li>
        <li>Tempeh</li>
      </UList>

      <Title>Choice of sides</Title>
      <UList>
        <li>Braised chilli potatoes</li>
        <li>Chicken liver</li>
        <li>Chicken gizzard</li>
      </UList>
    </FlexColumn>
  );
};
