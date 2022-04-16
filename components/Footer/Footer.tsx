import React, { FC } from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div
          className="flex text-center lg:text-left"
          style={{ justifyContent: "space-around" }}
        >
          <FooterItem title={"Contact Us"}>
            <ul>
              <li>926 Albany Highway, East Victoria Park WA 6101</li>
              <li>sevenaprons@gmail.com</li>
            </ul>
          </FooterItem>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-4">
                  Cafe Hours
                </span>
                <ul className="list-unstyled">
                  <li className="font-semibold block pb-2 text-xs">
                    Tuesday to Saturday
                    <br /> 10am - 3pm
                  </li>

                  <li className="font-semibold block pb-2 text-xs">
                    Sunday & Monday
                    <br /> Closed
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-sm font-semibold mb-4">
                  Delivering to
                </span>
                <ul className="list-unstyled">
                  <li className="font-semibold block pb-2 text-xs">
                    Perth metropolitan area
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">SOCIALS</h4>

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
        </div>
        <a href="https://github.com/timeitel" target="_blank" rel="noreferrer">
          <div className="w-auto mx-auto text-center flex justify-start">
            <a
              href="https://timeitel.com"
              target="__blank"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "2rem 0 0 auto",
                width: "fit-content",
                color: "white",
                textDecoration: "underline",
                fontSize: "0.8rem",
              }}
            >
              MADE BY TIM
            </a>
          </div>
        </a>
      </div>
    </footer>
  );
};

interface Props {
  title: string;
}

export const FooterItem: FC<Props> = ({ title, children }) => {
  return (
    <StyledFooterItemContainer>
      <span className="block uppercase text-lg font-semibold mb-4">
        {title}
      </span>
      {children}
    </StyledFooterItemContainer>
  );
};

export const StyledFooterItemContainer = styled.div``;
