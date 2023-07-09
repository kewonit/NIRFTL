/* eslint-disable */
import _app from "@/src/pages/_app"
import { BTechRTI } from '.prisma/client'
import React, { useEffect, useState } from 'react';
import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DataTableColumnHeader } from "@/components/global/columnheader"



export const columns: ColumnDef<BTechRTI>[] = [
    {
      accessorKey: "Institute",
      header: "Name",
      cell: ({ row }) => {
        const amount = String(row.getValue("Institute"))
        const formatted = amount
   
        return  <div className="text-left whitespace-nowrap">{formatted}</div>
      },
    },
    {
      accessorKey: "Years",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => {
      const amount = String(row.getValue("Years"))
      const formatted = amount
  
      return  <div className="text-center whitespace-nowrap pr-4">{formatted}</div>
    },   
    },
    {
      accessorKey: "Branch",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Branch" />
    ),
    cell: ({ row }) => {
      const amount = String(row.getValue("Branch"))
      const formatted = amount
  
      return  <div className="text-center whitespace-nowrap pr-4">{formatted}</div>
    },   
    },
    {
      accessorKey: "Registered",
      header: ({ column }) =>  (
          <DataTableColumnHeader column={column} title="Registered" />
      ),
        cell: ({ row }) => {
          const amount = parseFloat(row.getValue("Registered"))
          const formatted = amount
     
          return  <div className="text-center pr-4">{formatted}</div>
        },
    },
    {
      accessorKey: "Placed",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Placed" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("Placed"))
        const formatted = amount
   
        return  <div className="text-center pr-4">{formatted}</div>
      },
    },
    {
      accessorKey: "Median",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Median" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("Median"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount)
    
        return  <div className="text-left font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "Average",
      header: ({ column }) =>  (
          <DataTableColumnHeader column={column} title="Average" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("Average"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount)
    
        return  <div className="text-left font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "Lowest",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Lowest" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("Lowest"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount)
    
        return  <div className="text-left font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "Highest",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Highest" />
    ),
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("Highest"))
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "INR",
        }).format(amount)
    
        return  <div className="text-left font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: "Source",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Source" />
    ),
      cell: ({ row }) => {
        const amount = String(row.getValue("Source"))
        const formatted = amount
        return <Button variant="outline" asChild><Link href={formatted}>Source</Link></Button>
      },
    },  
  ]