import { useMediaQuery } from "common/hooks";

export const Insta = () => {
  const isDesktop = useMediaQuery({ min: "tablet" });
  return (
    <section id="insta" className="py-12 bg-blueGray-100">
      <div className="container mx-auto">
        <h2 className="font-semibold text-4xl text-center">
          FOLLOW OUR JOURNEY
        </h2>
      </div>
    </section>
  );
};
