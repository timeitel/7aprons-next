/* eslint-disable react/jsx-no-target-blank */
import { CateringSet } from "modules/catering";
import { Contact, Footer, Landing, Navbar } from "modules/home";
import Head from "next/head";
import React from "react";

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
      <div style={{ padding: "3rem 0" }}>
        <CateringSet
          hideCta
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
          hideCta
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
