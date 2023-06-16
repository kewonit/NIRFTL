import { type NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/home/hero"
import Trustedby from "@/components/home/trustedby"
import Landing from "@/components/home/landing"
import  { NavigationMenuHeader }  from "@/components/home/header"
import Footer from "@/components/home/footer"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nirf Tierlist</title>
        <meta name="description" content="Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationMenuHeader></NavigationMenuHeader>
      <Landing></Landing>
      <Hero></Hero>
      <Trustedby></Trustedby>
      <Footer></Footer>
    </>
  );
};

export default Home;
