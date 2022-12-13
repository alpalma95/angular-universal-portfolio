import { PrismaClient } from '@prisma/client';
import { User } from '../models/userModel';

const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

export const getUsers = async (req: any, res: any) => {
  const allUsers = await prisma.user.findMany();

  res.status(200).json({ allUsers });
};

export const createUser = async (req: any, res: any) => {
  const body = req.body;
  const newUser = new User(
    body.email,
    body.password,
    body.passwordConfirm,
    body.name,
    body.secret
  );
  if (!newUser.checkPasswordMatch()) return;

  newUser.encryptPassword();
  const user = await prisma.user.create({
    data: newUser,
  });

  res.status(200).json(user);
};

export const loginUser = async (req: any, res: any) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (bcrypt.compareSync(req.body.password, user?.password)) {
    res.status(200).json(user);
  }
};
