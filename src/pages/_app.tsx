import Footer from "@/components/Footer";
import Form from "@/components/Contact";
import Header from "@/components/Header";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Audits from "@/components/Audits";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Audits />
      <Form />
      
      <Footer />
      

    </>
  );
}


