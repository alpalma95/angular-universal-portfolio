import { PrismaClient } from '@prisma/client';
import { User } from '../models/userModel';

const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');

export const getUsers = async (req: any, res: any) => {
  const allUsers = await prisma.user.findMany();

  res.status(200).json({ allUsers });
};

export const createUser = async (req: any, res: any) => {
  try {
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
  } catch (err: any) {
    res.status(err.status).json({ message: 'Something went wrong!' });
  }
};

export const loginUser = async (req: any, res: any) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (!user || !bcrypt.compareSync(req.body.password, user?.password))
      res.status(404).json({
        satus: 'error',
        message: 'Invalid credentials',
      });

    if (bcrypt.compareSync(req.body.password, user?.password)) {
      res
        .status(200)
        .json({ name: user?.name, email: user?.email, secret: user?.secret });
    }
  } catch (err: any) {
    res.status(err.status).json({ message: 'Something went wrong!' });
  }
};
