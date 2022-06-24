/* eslint-disable react/jsx-no-target-blank */
import { ContactSection, Footer, Landing, Navbar } from "modules/home";
import Head from "next/head";

export default function HeatAndEat() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
