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
      <div style={{ margin: isDesktop ? "0 1rem" : "1rem 0", maxWidth: "50%" }}>
        <img
          src={imagePath}
          className="align-middle"
          style={{ borderRadius: "0.5rem" }}
        />
      </div>

      <SetDescription {...rest} hideCta={hideCta} />
    </Flex>
  );
};
