import { Router } from 'express';
import ProductController from '../controllers/productController';

const router = Router();
const productController = new ProductController();

router.get('/', productController.getAll);

export default router;