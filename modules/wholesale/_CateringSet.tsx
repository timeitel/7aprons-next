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
        padding: "1.5rem 1.5rem 0",
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
            height: isDesktop ? "35rem" : "10rem",
            width: isDesktop ? "35rem" : "100%",
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
