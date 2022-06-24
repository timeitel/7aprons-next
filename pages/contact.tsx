/* eslint-disable react/jsx-no-target-blank */
import { ContactSection, Footer, Landing, Navbar } from "modules/home";
import { ContactForm } from "modules/home/Contact/ContactForm";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar position="static" />
      <div style={{ display: "flex", width: "100%" }}>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
