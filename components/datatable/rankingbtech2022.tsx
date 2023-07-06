/* eslint-disable */
import { Product } from '.prisma/client'
import React, { useEffect, useState } from 'react';
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DataTableColumnHeader } from "@/components/global/columnheader"

export const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "institute_name",
      header: "Name",
      cell: ({ row }) => {
        const amount = String(row.getValue("institute_name"))
        const formatted = amount
   
        return  <div className="text-left whitespace-nowrap">{formatted}</div>
      },
    },
    {
      accessorKey: "year",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => {
      const amount = String(row.getValue("year"))
      const formatted = amount
  
      return  <div className="text-center whitespace-nowrap pr-4">{formatted}</div>
    },
    },
    {
      accessorKey: "college_tier",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Tier" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("college_tier"))
      const formatted = amount
  
      return  <div className="text-center pr-4">{formatted}</div>
    },
    },
    {
      accessorKey: "no_of_mean_package",
      header: ({ column }) =>  (
            <DataTableColumnHeader column={column} title="Median" />
      ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("no_of_mean_package"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount)
   
        return  <div className="text-left font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "no_of_male_students",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Male" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("no_of_male_students"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "no_of_female_students",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Female" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("no_of_female_students"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "total_students",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Total" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("total_students"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "graduating_in_stipulated_time",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Graduated" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("graduating_in_stipulated_time"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "placed_in_the_year",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Placed" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("placed_in_the_year"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "no_of_higher_edu",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="HigherEdu" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("no_of_higher_edu"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "source_pdf",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Source" />
    ),
      cell: ({ row }) => {
        const amount = String(row.getValue("source_pdf"))
        const formatted = amount
        return <Button variant="outline" asChild><Link href={formatted}>Source</Link></Button>
      },
    },  
  ]


