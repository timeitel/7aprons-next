import { Flex } from "@components/Flex";
import { useMediaQuery } from "common/hooks";
import { FC } from "react";
import { SetDescription } from "./_SetDescription";

interface Props {
  imagePath: string;
}

export const CateringSet: FC<Props> = ({ imagePath }) => {
  const isDesktop = useMediaQuery({ min: "tablet" });

  return (
    <Flex
      style={{
        padding: "1.5rem",
        flexDirection: isDesktop ? "row" : "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: isDesktop ? "50%" : "100%",
        }}
      >
        <img
          src={imagePath}
          className="align-middle"
          style={{
            borderRadius: "0.5rem",
            height: "30rem",
            width: "30rem",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ marginLeft: isDesktop ? "2rem" : 0 }}>
        <SetDescription />
      </div>
    </Flex>
  );
};
