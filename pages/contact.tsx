/* eslint-disable react/jsx-no-target-blank */
import { ContactSection, Footer, Navbar } from "modules/home";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar position="static" />

      <ContactSection
        title="Want to get in touch?"
        subtitle="We're more than happy to create a custom package to suit your event, just let us know below!"
      />

      <Footer />
    </>
  );
}
