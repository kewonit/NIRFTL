/* eslint-disable */
"use client"
import Head from "next/head";
import _app from "@/src/pages/_app"
import { BTechRTI } from '.prisma/client'
import React, { useEffect, useState } from 'react';
import { DataTable } from '@/components/global/data-tableRTI';
import prisma from '@/lib/prisma';
import { columns }  from "@/components/datatable/rtibtech"

export default function BTECHRTI({ products }: { products: any[] }) {
  const [data, setData] = useState<BTechRTI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await products;
      setData(result);
    };

    fetchData();
  }, 
);

return (
    <>
    <Head>
      <title>RTI data of BTECH (Engineering) Colleges</title>
      <meta name="description" content="Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location." />
      <link rel="icon" href="/favicol.ico" />
    </Head>
    <div className="container mx-auto py-10">
      <h1 className="mx-auto max-w-7xl scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
        RTI data of Engineering Colleges
      </h1>
        <DataTable columns={columns} data={data} />
    </div>
      <hr/>
        <h1 className="mx-auto max-w-7xl pt-10 px-4 text-center scroll-m-20 text-2xl font-bold tracking-tight lg:text-2xl">Credits</h1>
        <h3 className="mx-auto max-w-7xl pb-10 px-4 text-center scroll-m-20 text-xl font-bold tracking-tight lg:text-xl">
          <a className="transition hover:text-gray-600/75" href="https://www.reddit.com/user/OkNerve7447/">u/OkNerve7447, </a>
          <a className="transition hover:text-gray-600/75" href="https://www.quora.com/profile/Pritish-Poswal">Pritish Poswal </a>&
          <a className="transition hover:text-gray-600/75" href="https://www.reddit.com/r/JEENEETards/comments/14d8bah/placement_stats_of_iits_nits_iiits_and_gftis/"> u/Snorlaxx </a>
        </h3>
    </>
  );
}


export async function getServerSideProps() {
  const data = await prisma.bTechRTI.findMany({
    include: {
      category: true,
    },
  });

  const products = data.map((product) => ({
    ...product,
  }));

  return {
    props: { products },
  };
}