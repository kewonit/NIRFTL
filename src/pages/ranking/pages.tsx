import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import  { NavigationMenuHeader }  from "@/components/home/header"

// const {  institute_id, year, institute_name, no_of_mean_package, college_tier, graduating_in_stipulated_time, placed_in_the_year, source_pdf, no_of_higher_edu } = TableDemo;


import prisma from '../../../lib/prisma';

// yea ik I have used any everywhere, todo: read more about it
export function TableDemo({ products }: { products: any[] }) {
  return (
    <>
    <NavigationMenuHeader></NavigationMenuHeader>
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Year</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Teir</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: any) => {
          const { institute_id, year, institute_name, no_of_mean_package, college_tier, graduating_in_stipulated_time, placed_in_the_year, source_pdf, no_of_higher_edu } = product;
          return (
            <TableRow key={product.institute_id}>
              <TableCell className="font-medium">{institute_id}</TableCell>
              <TableCell>{year}</TableCell>
              <TableCell>{institute_name}</TableCell>
              <TableCell className="text-right">{no_of_mean_package}</TableCell>
              <TableCell className="text-right">{college_tier}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </>
  );
}

export default TableDemo;

export async function getServerSideProps(context :any) {
  const data = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  const products = data.map((product) => ({
    ...product
  }));

  return {
    props: { products },
  };
}
