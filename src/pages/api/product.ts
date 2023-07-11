// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
/* eslint-disable */
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import _app from "@/src/pages/_app"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.product.findMany({});
      return res.status(200).json({ data });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ msg: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ msg: 'Method not allowed' });
  }
}

export const config = {
  runtime: 'edge',
  regions: ['bom1'], 
};