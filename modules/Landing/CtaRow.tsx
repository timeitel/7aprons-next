import { useMediaQuery } from "common/hooks";
import { FC } from "react";
import styled, { css } from "styled-components";

interface Props {}

interface ItemProps {
  title: string;
  description: string;
  backgroundColor?: string;
}

export const CtaRow: FC<Props> = ({}) => {
  const isMobile = useMediaQuery({ max: "tablet" });
  return (
    <StyledCtaRow
      className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4"
      isMobile={isMobile}
    >
      <CtaItem
        title={"Heat & Eat Meals"}
        description={
          "Made fresh, vacuum packed, and then frozen so you can have it any time, anywhere."
        }
      />
      <CtaItem
        title={"Functions"}
        description={
          "Whether you're catering for yor office function, or celebrating a birthday - we have packages to suit all functions sizes."
        }
        backgroundColor={"grey"}
      />
      <CtaItem
        title={"Wholesale"}
        description={"Want to stock our meals? Get in touch to find out how."}
      />
    </StyledCtaRow>
  );
};

const CtaItem: FC<ItemProps> = ({
  description,
  title,
  backgroundColor = "black",
}) => {
  const isDesktop = useMediaQuery({ min: "tablet" });
  return (
    <div
      style={{
        backgroundColor,
        color: "white",
        padding: isDesktop ? "2rem 2rem 5rem" : "1rem",
      }}
    >
      <h6
        className={`text-xl ${isDesktop ? "mb-8" : "mb-1"}`}
        style={{ fontWeight: 900 }}
      >
        {title.toUpperCase()}
      </h6>
      {isDesktop && <p>{description}</p>}
      <img
        src="images/right-arrow.svg"
        style={{
          position: isDesktop ? "absolute" : "relative",
          bottom: isDesktop ? "1.5rem" : "0",
        }}
      />
    </div>
  );
};

export const StyledCtaRow = styled.div<{ isMobile: boolean }>`
  right: 50%;
  bottom: 0;
  transform: translate(50%, 50%);
  display: flex;
  width: 90%;
  position: absolute;

  ${(p) =>
    p.isMobile &&
    css`
      flex-direction: column;
      position: relative;
    `};
`;
