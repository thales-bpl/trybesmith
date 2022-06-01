import { Router } from 'express';
import LoginController from '../controllers/loginController';
import { validateUsername, validatePassword } from '../middlewares/loginValidations';

const router = Router();
const loginController = new LoginController();

router.post('/', validateUsername, validatePassword, loginController.login);

export default router;