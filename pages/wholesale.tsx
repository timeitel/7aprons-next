/* eslint-disable react/jsx-no-target-blank */
import { CateringSet } from "modules/catering";
import { Contact, Footer, Landing, Navbar } from "modules/home";
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
        subtitle="We work with stores to provide orders to stock of flexible sizes and prices."
        showCtaRow={false}
      />
      <div style={{ padding: "3rem 0" }}>
        <CateringSet
          imagePath={"images/our-story.jpg"}
          title={"Nasi Tumpeng"}
          subtitle={"Turmeric Rice Set"}
          description={[
            { text: "Turmeric Rice" },
            { text: "Choice of 1 protein", children: ["Chicken", "Pork"] },
            { text: "Fried noodle" },
            { text: "Braised beans / tofu / tempeh" },
          ]}
          price={""}
        />
        <CateringSet
          imagePath={"images/our-story.jpg"}
          title={"Nasi Tumpeng"}
          subtitle={"Turmeric Rice Set"}
          description={[
            { text: "Turmeric Rice" },
            { text: "Choice of 1 protein", children: ["Chicken", "Pork"] },
            { text: "Fried noodle" },
            { text: "Braised beans / tofu / tempeh" },
          ]}
          price={""}
        />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
