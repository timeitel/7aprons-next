/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";
import { About, Contact, Footer, Insta, Landing, Navbar } from "modules/home";

export default function HeatAndEat() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        title="Heat & eat meals"
        subtitle="Visit during store hours for our delicious frozen meals. Made fresh, vacuum packed, and then frozen so you can have it any time, anywhere."
        showCtaRow={false}
      />
      <Contact />
      <Footer />
    </>
  );
}
