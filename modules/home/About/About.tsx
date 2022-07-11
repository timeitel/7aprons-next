import { useMediaQuery } from "common/hooks";

export const About = () => {
  const isDesktop = useMediaQuery({ min: "tablet" });
  return (
    <section
      id="about"
      className="relative bg-blueGray-100"
      style={{ paddingTop: isDesktop ? "16rem" : "2rem" }}
    >
      <div className="container mx-auto">
        <div
          className="flex"
          style={{ flexDirection: isDesktop ? "row" : "column-reverse" }}
        >
          <div style={{ margin: isDesktop ? "0 1rem" : "1rem" }}>
            <img
              alt="Our story"
              src="images/our-story.jpg"
              className="w-full align-middle"
              style={{ borderRadius: "0.5rem" }}
            />
          </div>

          <div
            className="container mx-auto"
            style={{ maxWidth: "600px", padding: "1rem" }}
          >
            <p
              style={{
                fontWeight: 500,
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
              }}
            >
              THE HUMANS BEHIND THE APRONS
            </p>
            <h2
              className="font-semibold text-4xl"
              style={{ marginBottom: "1rem" }}
            >
              SHARING THE FLAVOURS WE'VE GROWN UP WITH
            </h2>
            <p className="text-md font-light mt-2 mb-8">
              Coming from Malaysian and Indonesian backgrounds, we wanted to
              bring to Perth a mix of fragrant street food along with the warmth
              and heartiness of the home-cooked meals we grew up with.
            </p>
            <p className="text-md font-light mt-2">
              We hope to transport people back to the tastes of Asia with a
              single bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
