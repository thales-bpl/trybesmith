import { Router } from 'express';
import UserController from '../controllers/userController';
import {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
} from '../middlewares/userValidations';

const router = Router();
const userController = new UserController();

router.post(
  '/',
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
  userController.post,
);

export default router;