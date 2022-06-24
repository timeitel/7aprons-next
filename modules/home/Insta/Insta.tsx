import { InstaFeed } from "modules/home/Insta/InstaFeed";

export const Insta = () => {
  return (
    <section id="insta" className="py-20 bg-blueGray-100">
      <div className="container mx-auto" style={{ maxWidth: "850px" }}>
        <h2
          className="font-semibold text-4xl text-center"
          style={{ marginBottom: "2rem" }}
        >
          FOLLOW OUR JOURNEY
        </h2>
        <InstaFeed />
      </div>
    </section>
  );
};
