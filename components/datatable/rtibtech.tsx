/* eslint-disable */
import _app from "@/src/pages/_app"
import { BTechRTI } from '.prisma/client'
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
        const Institute = amount
   
        return  <div>{Institute}</div>
      },
    },
    {
      accessorKey: "Years",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Year" />
    ),
    cell: ({ row }) => {
      const amount = String(row.getValue("Years"))
      const Year = amount
  
      return  <div>{Year}</div>
    },   
    },
    {
      accessorKey: "Source",
      header: ({ column }) =>  (
        <DataTableColumnHeader column={column} title="Source" />
    ),
      cell: ({ row }) => {
        const amount = String(row.getValue("Source"))
        const Source = amount
        return <Button variant="outline" asChild><Link href={Source}>Source</Link></Button>
      },
    },  
  ]