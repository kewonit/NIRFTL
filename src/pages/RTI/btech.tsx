/* eslint-disable */
"use client"
import Head from "next/head";
import _app from "@/src/pages/_app"
import { BTechRTI } from '.prisma/client'
import React, { useEffect, useState } from 'react';
import { DataTable } from '@/components/global/data-tableRTI';
import prisma from '@/lib/prisma';
import { columns }  from "@/components/datatable/rtibtech"

export default function DemoPage({ products }: { products: any[] }) {
  const [data, setData] = useState<BTechRTI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await products;
      setData(result);
    };

    fetchData();
  }, [products]);

  return (
    <>
    <Head>
      <title>Nirf Tierlist for BTECH (Engineering) Colleges</title>
      <meta name="description" content="Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location." />
      <link rel="icon" href="/favicol.ico" />
    </Head>
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </>
  );
}


export async function getServerSideProps(context: any) {
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