/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";
import { About, Contact, Footer, Insta, Landing, Navbar } from "modules/home";

export default function Wholesale() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        title="Wholesale"
        subtitle="We work with stores to provide orders to stock of flexible sizes and prices."
        showCtaRow={false}
      />
      <Contact />
      <Footer />
    </>
  );
}
