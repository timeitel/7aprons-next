import { useMediaQuery } from "common/hooks";
import { useRouter } from "next/dist/client/router";
import { FC, useState } from "react";
import styled, { css } from "styled-components";

interface Props {}

interface ItemProps {
  title: string;
  description: string;
  backgroundColor?: string;
  to: string;
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
        to={"/heat-and-eat"}
      />
      <CtaItem
        title={"Catering"}
        description={
          "Whether you're catering for your office function, or celebrating a birthday - we have packages to suit all occasions and sizes."
        }
        backgroundColor={"grey"}
        to={"/functions"}
      />
      <CtaItem
        title={"Wholesale"}
        description={"Want to stock our meals? Get in touch to find out how."}
        to={"/wholesale"}
      />
    </StyledCtaRow>
  );
};

const CtaItem: FC<ItemProps> = ({
  description,
  title,
  backgroundColor = "black",
  to,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();
  const isDesktop = useMediaQuery({ min: "tablet" });
  return (
    <StyledCtaItem
      style={{
        backgroundColor,
        color: "white",
        padding: isDesktop ? "2rem 2rem 5rem" : "1rem",
        cursor: "pointer",
      }}
      onClick={() => router.push(to)}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <h6
        className={`text-xl ${isDesktop ? "mb-8" : "mb-1"}`}
        style={{ fontWeight: 900 }}
      >
        {title.toUpperCase()}
      </h6>
      {isDesktop && <p>{description}</p>}
      <div
        style={{
          position: isDesktop ? "absolute" : "relative",
          bottom: isDesktop ? "1.5rem" : 0,
          color: isHovering ? "firebrick" : "white",
        }}
      >
        <svg
          fill={isHovering ? "firebrick" : "white"}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="2rem"
          height="1.5rem"
          viewBox="0 0 45.513 45.512"
          xmlSpace="preserve"
          className="svg"
        >
          <g>
            <path
              d="M44.275,19.739L30.211,5.675c-0.909-0.909-2.275-1.18-3.463-0.687c-1.188,0.493-1.959,1.654-1.956,2.938l0.015,5.903
		l-21.64,0.054C1.414,13.887-0.004,15.312,0,17.065l0.028,11.522c0.002,0.842,0.338,1.648,0.935,2.242s1.405,0.927,2.247,0.925
		l21.64-0.054l0.014,5.899c0.004,1.286,0.781,2.442,1.971,2.931c1.189,0.487,2.557,0.21,3.46-0.703L44.29,25.694
		C45.926,24.043,45.92,21.381,44.275,19.739z"
            />
          </g>
        </svg>
      </div>
    </StyledCtaItem>
  );
};

export const StyledCtaRow = styled.div<{ isMobile: boolean }>`
  ${(p) =>
    !p.isMobile &&
    css`
      right: 50%;
      bottom: 0;
      transform: translate(50%, 50%);
      display: flex;
      width: 90%;
      position: absolute;
    `};

  ${(p) =>
    p.isMobile &&
    css`
      flex-direction: column;
      position: relative;
      margin-bottom: 5.5rem;
    `};
`;

export const StyledCtaItem = styled.div`
  .svg {
    margin-left: 0;
    transition: margin 300ms ease-in-out;
  }

  &:hover .svg {
    margin-left: 1rem;
  }
`;
