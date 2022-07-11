/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";
import {
  About,
  ContactSection,
  Footer,
  Insta,
  Landing,
  Navbar,
} from "modules/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        // titlePrefix="WELCOME TO SEVEN APRONS"
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
