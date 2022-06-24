/* eslint-disable react/jsx-no-target-blank */
import { CateringSet } from "modules/catering";
import { Contact, Footer, Landing, Navbar } from "modules/home";
import Head from "next/head";
import React from "react";

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

      <div style={{ padding: "3rem 0" }}>
        <CateringSet
          imagePath={"images/tumpeng.jpeg"}
          title={"Nasi Tumpeng"}
          subtitle={"Turmeric Rice Set"}
          description={[
            { text: "Turmeric Rice" },
            { text: "Choice of 1 protein", children: ["Chicken", "Pork"] },
            { text: "Fried noodle" },
            { text: "Braised beans / tofu / tempeh" },
          ]}
          price={"$17 PER HEAD (MIN. ORDER 20PAX"}
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
          price={"$17 PER HEAD (MIN. ORDER 20PAX"}
        />
      </div>
      <Contact />
      <Footer />
    </>
  );
}
