import { Flex } from "@components/Flex";
import { useMediaQuery } from "common/hooks";
import { ICateringSet } from "modules/catering/CateringSetList";
import { SetDescription } from "modules/catering/SetDescription";
import { FC } from "react";

interface Props extends ICateringSet {
  price: string;
  hideCta?: boolean;
}

export const CateringSet: FC<Props> = ({
  imagePath,
  hideCta = false,
  ...rest
}) => {
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
          margin: isDesktop ? "0 2rem" : "2rem 0",
          maxWidth: isDesktop ? "50%" : "100%",
        }}
      >
        <img
          src={imagePath}
          className="align-middle"
          style={{
            borderRadius: "0.5rem",
            height: "23rem",
            width: "23rem",
            objectFit: "cover",
          }}
        />
      </div>

      <SetDescription {...rest} hideCta={hideCta} />
    </Flex>
  );
};
