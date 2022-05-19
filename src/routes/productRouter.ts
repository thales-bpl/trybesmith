import { Router } from 'express';
import ProductController from '../controllers/productController';
import { validateName, validateAmount } from '../middlewares/productValidations';

const router = Router();
const productController = new ProductController();

router
  .get('/', productController.getAll)
  .post('/', validateName, validateAmount, productController.post);

export default router;