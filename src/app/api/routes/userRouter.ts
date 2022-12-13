import * as express from 'express';
import {
  getUsers,
  createUser,
  loginUser,
} from '../controllers/userControllers';

export const userRouter = express.Router();

userRouter.route('/').get(getUsers);
userRouter.route('/signup').post(createUser);
userRouter.route('/login').post(loginUser);
userRouter.route('/secret').patch().get();
