import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@styles/tailwind.css";
import type { AppProps } from "next/app";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
