import { useMediaQuery } from "common/hooks";
import { LandingImage } from "modules/home/Landing";
import { CtaRow } from "modules/home/Landing/CtaRow";
import { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
  showCtaRow: boolean;
  imgSrc?: string;
  height?: string;
}

export const Landing: FC<Props> = ({
  title,
  subtitle,
  showCtaRow,
  imgSrc = "images/landing-food.jpg",
  height,
  children,
}) => {
  const isDesktop = useMediaQuery({ min: "tablet" });
  return (
    <section
      id="home"
      className="header relative pt-16 items-center flex"
      style={{
        position: "relative",
        maxHeight: isDesktop ? "860px" : "unset",
        height: height ? height : isDesktop ? "100vh" : "unset",
      }}
    >
      <LandingImage alt="Indonesian food" src={imgSrc} />
      <div className="container z-10 mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-6xl text-white">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white">
              {subtitle}
            </p>
            <div style={{ marginBottom: isDesktop ? "0" : "4rem" }}>
              {children}
            </div>
          </div>
          {showCtaRow && <CtaRow />}
        </div>
      </div>
    </section>
  );
};
