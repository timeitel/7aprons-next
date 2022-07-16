/* eslint-disable react/jsx-no-target-blank */
import { Footer, Navbar } from "modules/home";
import { ContactSection } from "modules/home/_Contact";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar position="static" />

      <ContactSection />

      <Footer />
    </>
  );
}
