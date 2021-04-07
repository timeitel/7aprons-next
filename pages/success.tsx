/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Navbar } from "@components/Navbar";
import { Footer } from "@components/Footer";
import { basePath } from "../next.config";
import { domain } from "@utils";

const headerStyle = {
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${basePath}/images/landing-food.jpg")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

export default function Success() {
  return (
    <>
      <Navbar fixed />
      <section
        id="home"
        style={headerStyle}
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-white">
                Thanks for ordering 7 Aprons!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white">
                We'll send you an email to confirm your order.
              </p>
              <div className="mt-12 flex flex-wrap">
                <a
                  href={domain}
                  className="flex items-center whitespace-nowrap get-started text-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-4 mb-2 bg-secondary active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  <i
                    className="fas fa-arrow-circle-left mr-2"
                    aria-hidden="true"
                  ></i>
                  back to home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
