import { type NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/home/hero"
import Trustedby from "@/components/home/trustedby"
import Landing from "@/components/home/landing"
import _app from "@/src/pages/_app"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nirf Tierlist</title>
        <meta name="description" content="Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location." />
        <link rel="icon" href="/favicol.ico" />
      </Head>
      <Landing></Landing>
      <Hero></Hero>
      <Trustedby></Trustedby>
    </>
  );
};

export default Home;
