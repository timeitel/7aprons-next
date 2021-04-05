/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import OrderOnline from "../components/OnlineOrder/OnlineOrder";
import { basePath } from "../next.config";
import styled from "styled-components";
import Image from "next/image";

const orderSection = {
  background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("${basePath}/images/ingredients.jpg")`,
  backgroundPosition: "center center",
  backgroundSize: "cover",
};

const MenuContainer = styled.div`
  margin-left: 0;

  @media (min-width: 768px) {
    margin-left: 20%;
  }
`;

const LandingImage = styled(Image)`
  filter: brightness(50%);
`;

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section
        id="home"
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
      >
        <LandingImage
          alt="Indonesian food"
          src="/images/landing-food.jpg"
          layout="fill"
          objectFit="cover"
          quality={50}
        />
        <div className="container z-10 mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-white">
                Authentic Asian Cuisine
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white">
                Using common, Asian ingredients to ensure we convey the
                authenticity of flavours into our meals.
              </p>
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
                  <i
                    className="fas fa-angle-double-down ml-2"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="pt-48 md:pt-40 pb-16 md:pb-32 relative bg-blueGray-100"
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="Our story"
                  src="images/our-story.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    The 7 humans behind the aprons
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    We want to bring a fusion of the fragrant street food,
                    together with the warmth of traditional home-cooked meals to
                    transport people back to the tastes of Asia.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-utensils"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Signature Dishes
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        From Javanese, to Hainan, to peanut satay sauce. All
                        varieties of Asian dishes can be found at 7Aprons
                        throughout the changing, monthly menu.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-truck"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Delivery</h6>
                      <p className="mb-4 text-blueGray-500">
                        Delivering anywhere within the Perth metropolitan area
                        each week.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4 hidden md:block">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-users"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Catering</h6>
                      <p className="mb-4 text-blueGray-500">
                        Contact us for catering and food options.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Perth Locals
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We want to share the warmth of traditional home-cooked
                        meals to transport people back to the tastes of Asia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" style={orderSection} className="pb-20 overflow-hidden">
        <div className="container mx-auto overflow-hidden pb-48">
          <div>
            <MenuContainer className="flex flex-wrap justify-center md:justify-start items-enter">
              <div className="w-10/12 md:w-4/12 md:px-4 mt-32 md:mt-48">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-invoice text-2xl"></i>
                </div>
                <h3 className="text-3xl mb-2 text-white font-semibold leading-normal">
                  7 Aprons Menu
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                  A choice of two delicious dishes, changing every week for
                  delivery to any office or location in the Perth metropolitan
                  area.{" "}
                </p>
                <div className="block pb-6">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Authentic
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Indonesian
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Malaysian
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Delivery
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Catering
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-200 bg-disabled uppercase last:mr-0 mr-2 mt-2">
                    Family-owned
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap">
                  <a
                    href="#order"
                    className="flex items-center mr-2 mb-2 whitespace-nowrap get-started text-white font-bold px-3 py-4 rounded outline-none focus:outline-none uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    <i
                      className="fas fa-angle-double-down mr-2"
                      aria-hidden="true"
                    ></i>
                    Order Online
                  </a>
                  <a
                    href="images/menu.jpg"
                    target="_blank"
                    className="flex bg-primary mb-2 items-center whitespace-nowrap github-star text-white font-bold px-6 py-4 rounded outline-none focus:outline-none bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                    View Menu
                    <i
                      className="fas fa-external-link-square-alt ml-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
            </MenuContainer>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-12 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center"></p>
              <h3 id="order" className="font-semibold mb-12 text-3xl">
                Order Online 🍛
              </h3>
              <OrderOnline />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
