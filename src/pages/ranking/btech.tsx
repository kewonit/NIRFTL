"use client"

import React, { useEffect, useState } from 'react';
import { Payment, columns } from '@/components/global/columns';
import { DataTable } from '@/components/global/data-table';
import prisma from '../../../lib/prisma';
import  { NavigationMenuHeader }  from "@/components/home/header"
import { faker } from "@faker-js/faker"
import { any } from 'zod';


export function TableDemo({ products }: { products: any[] }) {
  const { institute_id, year, institute_name, no_of_mean_package } = products[0];
  return {
    institute_id: institute_id,
    institute_name: institute_name,
    no_of_mean_package_: no_of_mean_package,
    year: year,
  };
}


export default function DemoPage({ products }: { products: any[] }) {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await products as any;
      setData(result);
    };

    fetchData();
  }, [products]);

  return (
    <>
    <NavigationMenuHeader></NavigationMenuHeader>
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const data = await prisma.product.findMany({
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
