import { Router } from 'express';
import OrderController from '../controllers/orderController';
import JwtValidations from '../middlewares/jwtValidations';
import orderValidations from '../middlewares/orderValidations'; 

const router = Router();
const orderController = new OrderController();
const tokenValidator = new JwtValidations();

router
  .get('/', orderController.getAll)
  .post('/', tokenValidator.validateToken, orderValidations, orderController.post);

export default router;
