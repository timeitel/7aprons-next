/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { domain } from "@utils";
import { Landing } from "@components/Landing";

export default function Success() {
  return (
    <>
      <Navbar />
      <Landing
        title="Thanks for ordering 7 Aprons!"
        subtitle="We'll send you an email to confirm your order."
      >
        <div className="mt-12 flex flex-wrap">
          <a
            href={domain}
            className="flex items-center whitespace-nowrap get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-4 mb-2 bg-secondary active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
          >
            <i className="fas fa-arrow-circle-left mr-2" aria-hidden="true"></i>
            back to home
          </a>
        </div>
      </Landing>

      <Footer />
    </>
  );
}
