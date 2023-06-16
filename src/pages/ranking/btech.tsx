/* eslint-disable */
"use client"
import Head from "next/head";
import { Product } from '.prisma/client'
import React, { useEffect, useState } from 'react';
import { DataTable } from '@/components/global/data-table';
import prisma from '../../../lib/prisma';
import  { NavigationMenuHeader }  from "@/components/home/header"
import { any } from 'zod';
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/global/columnheader"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "institute_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = String(row.getValue("institute_name"))
      const formatted = amount
 
      return  <div className="text-left">{formatted}</div>
    },
  },
  {
    accessorKey: "college_tier",
    header: "Tier",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("college_tier"))
      const formatted = amount
 
      return  <div className="text-right">{formatted}</div>
    },
  },
  {
    accessorKey: "year",
    header: "Year",
    cell: ({ row }) => {
      const amount = String(row.getValue("year"))
      const formatted = amount
 
      return <div className="text-right w-14">{formatted}</div>
    },
  },
  {
    accessorKey: "no_of_mean_package",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Mean
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("no_of_mean_package"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "INR",
      }).format(amount)
 
      return  <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: "no_of_male_students",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Male
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("no_of_male_students"))
      const formatted = amount
 
      return  <div className="text-right pr-4">{formatted}</div>
    },
  },
  {
    accessorKey: "no_of_female_students",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Female
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("no_of_female_students"))
      const formatted = amount
 
      return  <div className="text-right pr-4">{formatted}</div>
    },
  },
  {
    accessorKey: "total_students",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total_students"))
      const formatted = amount
 
      return  <div className="text-right pr-4">{formatted}</div>
    },
  },
  {
    accessorKey: "graduating_in_stipulated_time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Graduated
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("graduating_in_stipulated_time"))
      const formatted = amount
 
      return  <div className="text-right pr-4">{formatted}</div>
    },
  },
  {
    accessorKey: "placed_in_the_year",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Placed
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("placed_in_the_year"))
      const formatted = amount
 
      return  <div className="text-right pr-4">{formatted}</div>
    },
  },
  {
    accessorKey: "no_of_higher_edu",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          HigherEdu
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("no_of_higher_edu"))
      const formatted = amount
 
      return  <div className="text-right pr-4">{formatted}</div>
    },
  },

]

export default function DemoPage({ products }: { products: any[] }) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await products as any;
      setData(result);
    };

    fetchData();
  }, [products]);

  return (
    <>
      <Head>
        <title>Nirf Tierlist for BTECH Colleges</title>
        <meta name="description" content="Access a comprehensive repository of essential information to discern your ideal academic institution, conveniently consolidated in a singular location." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
