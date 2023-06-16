import { type NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/home/hero"
import Trustedby from "@/components/home/trustedby"
import Landing from "@/components/home/landing"
import  { NavigationMenuHeader }  from "@/components/home/header"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import Footer from "@/components/home/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nirf Tierlist</title>
        <meta name="description" content="Nirf Tierlist" />
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
