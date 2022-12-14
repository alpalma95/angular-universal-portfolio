import * as express from 'express';
import { createUser, loginUser } from '../controllers/userControllers';

export const userRouter = express.Router();

userRouter.route('/signup').post(createUser);
userRouter.route('/login').post(loginUser);
