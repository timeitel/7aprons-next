/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";
import { About, Contact, Footer, Insta, Landing, Navbar } from "modules/home";

export default function Catering() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        title="Catering"
        subtitle="We cater for a variety of function sizes and occasions with preset packages. Otherwise, please feel free to get in touch for a custom order."
        showCtaRow={false}
      />
      <Contact />
      <Footer />
    </>
  );
}
