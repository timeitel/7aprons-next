/* eslint-disable react/jsx-no-target-blank */
import { CateringSet } from "modules/catering";
import { ContactSection, Footer, Landing, Navbar } from "modules/home";
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
        title="Heat & Eat Meals"
        subtitle="Visit during store hours for our delicious frozen meals. Made fresh, vacuum packed, and then frozen so you can have it any time, anywhere."
        showCtaRow={false}
        height={"50vh"}
        textCenter
      />
      <div style={{ padding: "3rem 0" }} className="bg-blueGray-100">
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
      <ContactSection title="Ready to place an order?" />
      <Footer />
    </>
  );
}
