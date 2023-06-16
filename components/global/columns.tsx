"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DataTableColumnHeader } from "@/components/global/columnheader"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  institute_id: string
  institute_name: string
  year: string
  college_tier: string
  no_of_mean_package: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "institute_id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="institute_id" />
    ),
  },
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
  },
  {
    accessorKey: "college_tier",
    header: "Tier",
  },
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "no_of_mean_package",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          mean
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
]
