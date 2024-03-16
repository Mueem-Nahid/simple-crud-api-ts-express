import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);

router.get('/', UserController.getAllUser);

router.get('/:id', UserController.getUserById);

export const UserRoutes = router;
