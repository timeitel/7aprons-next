/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Head from "next/head";
import { Footer } from "@components/Footer";
import { OnlineOrder } from "@components/OnlineOrder";
import { Navbar } from "@components/Navbar";
import { Landing } from "@components/Landing";
import { About } from "@components/About";
import { Menu } from "@components/Menu";

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
      >
        <div className="mt-12 flex flex-wrap">
          <a
            href="images/menu.jpg"
            target="_blank"
            className="flex items-center whitespace-nowrap get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-4 mb-2 bg-secondary active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            View Menu
            <i
              className="fas fa-external-link-square-alt ml-2"
              aria-hidden="true"
            ></i>
          </a>
          <a
            href="#order"
            className="flex items-center whitespace-nowrap github-star text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mb-2 bg-primary active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
          >
            Order Online
            <i className="fas fa-angle-double-down ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </Landing>

      <About />

      <Menu />

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-12 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center"></p>
              <h3 className="font-semibold mb-4 text-3xl">Order Online 🍛</h3>
              <p className="mb-12 w-100 md:w-50">
                May's menu will be released shortly. Please visit again soon. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
