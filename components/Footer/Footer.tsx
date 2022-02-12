import React from "react";

export const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Socials?</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Follow us on Instagram or Facebook to see what specials are coming
              up!
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/sevenaprons/"
              >
                <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2">
                  <i className="fab fa-facebook-square"></i>
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/sevenaprons?igshid=o28eudxnpi9p"
              >
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Catering Hours
                </span>
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Monday to Friday
                    <br /> 10am - 3pm
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Saturday
                    <br /> 10am - 3pm
                    <br /> 5pm - 8pm
                  </li>
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Sunday
                    <br /> Closed
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Delivering to
                </span>
                <ul className="list-unstyled">
                  <li className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                    Perth metropolitan area
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <a
          href="https://github.com/timeitel"
          target="_blank"
          rel="noreferrer"
          className="flex flex-wrap items-center md:justify-between justify-center"
        >
          <div className="w-auto px-4 mx-auto text-center flex justify-start">
            <a
              href="https://timeitel.com"
              target="__blank"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "0.5rem",
                width: "fit-content",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Made by Tim
            </a>
            😊
          </div>
        </a>
      </div>
    </footer>
  );
};
