/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";
import { About, Footer, Insta, Landing, Navbar } from "modules/home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Seven Aprons | Catering & Delivery</title>
        <link rel="icon" href="images/favicon.svg" />
      </Head>
      <Navbar />
      <Landing
        title="Authentic Asian Cuisine"
        subtitle="Using common, Asian ingredients to ensure we convey the authenticity of flavours into our meals"
      />
      <About />
      <Insta />
      <Footer />
    </>
  );
}
