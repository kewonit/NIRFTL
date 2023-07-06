import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import * as React from "react"
import  NavigationMenuHeader   from "@/components/home/header"
import NextProgress from "next-progress";
import Head from "next/head";
import Footer from "@/components/home/footer"

const MyApp: AppType = ({ Component, pageProps }) => {
  return(
  <>
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://i.imgur.com/CSyItln.png" />
    <meta property="og:image:type" content="image/png" />
  </Head>
    <NextProgress height={5} options={{ showSpinner: false }} />
    <NavigationMenuHeader />
      <Component {...pageProps} />
    <Footer />
  </>
  )
};
export const runtime = 'experimental-edge';
export default MyApp;
