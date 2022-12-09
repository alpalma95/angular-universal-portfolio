import * as express from 'express';
import { getUsers } from '../controllers/userControllers';

export const userRouter = express.Router();

userRouter.route('/').get(getUsers);
