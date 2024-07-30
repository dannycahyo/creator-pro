import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import "@src/styles/globals.css";
import { fonts } from "@src/lib/fonts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Creator PRO</title>
        <meta
          name="description"
          content="A content creator tool for everyone"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>
        {`
          :root {
            --font-inter: ${fonts.inter.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
