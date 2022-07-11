/* eslint-disable react/jsx-no-target-blank */
import { CateringSet } from "modules/catering";
import { Landing } from "modules/catering/_Landing";
import { ContactSection, Footer, Navbar } from "modules/home";
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
        subtitle="Our custom meal sets make for the perfect addition to your next event"
        imgSrc="images/catering-hero.jpg"
      />

      <div style={{ padding: "3rem 0" }} className="bg-blueGray-100">
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
      <ContactSection />
      <Footer />
    </>
  );
}
