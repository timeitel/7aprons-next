/* eslint-disable react/jsx-no-target-blank */
import { About, Footer, Insta, Landing, Navbar } from "modules/home";
import { ContactSection } from "modules/home/_Contact";
import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        title="Perth's Authentic Asian Cuisine"
        subtitle="Using the flavours we've grown up with to create a fusion of dishes from Indonesia and Malaysia."
        showCtaRow={true}
      />
      <About />
      <Insta />
      <ContactSection />
      <Footer />
    </>
  );
}
