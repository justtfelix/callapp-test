import { Router } from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteAllUsers } from '../controllers';

export const userRouter = Router();

userRouter.route('/users')
  .get(getAllUsers)
  .post(createUser)
  .delete(deleteAllUsers);

userRouter.route('/users/:id')
  .get(getUserById)
  .patch(updateUser);