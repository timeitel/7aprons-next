/* eslint-disable react/jsx-no-target-blank */
import { Footer, Landing, Navbar } from "modules/home";
import { ContactSection } from "modules/home/_Contact";
import { CateringSet } from "modules/wholesale/_CateringSet";
import Head from "next/head";
import React from "react";

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
        subtitle="Find our meals at a store near you"
        showCtaRow={false}
        textCenter
        height={"50vh"}
      />
      <div style={{ padding: "3rem 0 0" }} className="bg-blueGray-100">
        <CateringSet imagePath={"images/our-story.jpg"} />
      </div>
      <ContactSection />
      <Footer />
    </>
  );
}
