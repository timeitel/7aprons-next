import { Flex } from "@components/Flex";
import { useMediaQuery } from "common/hooks";
import { SetDescription } from "modules/catering/_SetDescription";
import { FC } from "react";

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
      <div>
        <img
          src={imagePath}
          className="align-middle"
          style={{
            borderRadius: "0.5rem",
            height: "35rem",
            width: "35rem",
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
