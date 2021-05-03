import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
