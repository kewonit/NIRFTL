/* eslint-disable */
import Head from "next/head";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { type NextPage } from "next";
import  { NavigationMenuHeader }  from "@/components/home/header"

const faq: NextPage = () => {
    return (
    <>  
    <Head>
      <title>Nirf Tierlist FAQ</title>
      <meta name="description" content="Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location." />
      <link rel="icon" href="/favicol.ico" />
    </Head>
    <NavigationMenuHeader></NavigationMenuHeader>
    <div className="mx-auto max-w-7xl px-4 py-10">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Where can I find the official source?</AccordionTrigger>
            <AccordionContent>
              You can find it at : <a target="_blank" href="https://www.nirfindia.org/2023/Ranking.html" className="text-gray-750 transition hover:text-gray-600/75">https://www.nirfindia.org/2023/Ranking.html</a>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Where can I contact the creator?</AccordionTrigger>
            <AccordionContent>
             @Discord meowww#1628 / @Twitter <a target="_blank" href="https://twitter.com/KewKartik" className="text-gray-750 transition hover:text-gray-600/75">KewKartik</a> 
            </AccordionContent>
          </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>Wrong Info / Missing college?</AccordionTrigger>
            <AccordionContent>
             <a target="_blank" href="https://www.reddit.com/user/kewkartik/comments/14c02tw/nirftl_thread/" className="text-gray-750 transition hover:text-gray-600/75">Leave a comment on this thread, would really appreciate your efforts for helping create better accessible data for students! Click here!</a> 
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </div>
    </>
    );
};

  
export default faq;