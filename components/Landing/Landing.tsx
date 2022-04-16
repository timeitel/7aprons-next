import { LandingImage } from "@components/Landing";
import { CtaRow } from "@components/Landing/CtaRow";

export const Landing = ({ title, subtitle, children }) => {
  return (
    <section
      id="home"
      className="header relative pt-16 items-center flex h-screen max-h-860-px"
      style={{ position: "relative" }}
    >
      <LandingImage alt="Indonesian food" src="images/landing-food.jpg" />
      <div className="container z-10 mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-6xl text-white">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white">
              {subtitle}
            </p>
            {children}
          </div>
        </div>
        <CtaRow />
      </div>
    </section>
  );
};
