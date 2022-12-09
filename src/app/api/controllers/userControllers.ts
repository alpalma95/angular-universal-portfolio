import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getUsers = async (req: any, res: any) => {
  const allUsers = await prisma.user.findMany();

  res.status(200).json({ allUsers });
};
