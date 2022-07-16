/* eslint-disable react/jsx-no-target-blank */
import { Footer, Landing, Navbar } from "modules/home";
import { Item } from "modules/meals/Item";
import Head from "next/head";

export default function HeatAndEat() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        title="Heat & Eat Meals"
        subtitle="Fresh, fragrant and hearty meals ready in minutes"
        showCtaRow={false}
        height={"50vh"}
        textCenter
      />
      <div
        style={{
          padding: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
          gap: "1.5rem",
        }}
      >
        <Item src={""} title={""} description={""} />
        <Item src={""} title={""} description={""} />
        <Item src={""} title={""} description={""} />
      </div>
      <Footer />
    </>
  );
}
