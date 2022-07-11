import { FlexColumn } from "@components/Flex";
import { FC } from "react";
import { UList } from "./_UList";

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
        Stockists
      </h2>

      <UList>
        <li>2nd Avenue IGA Mount Lawley</li>
        <li>The Marketplace Mount Lawley</li>
        <li>tucker fresh iga broadway</li>
        <li>foodies market iga claremont</li>
        <li>Preston st IGA como</li>
        <li>Murdoch uni iga</li>
        <li>The good grocer leederville iga</li>
        <li>The good grocer south perth iga</li>
        <li>The good grocer applecross iga</li>
        <li>Myaree super iga</li>
        <li>East Perth iga</li>
        <li>iga south fremantle</li>
        <li>iga beckenham</li>
        <li>Village iga express uwa</li>
        <li>IGA hamilton hill</li>
        <li>IGA mt pleasant</li>
        <li>wembley super iga</li>
      </UList>
    </FlexColumn>
  );
};
