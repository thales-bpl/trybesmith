import { Request, Response } from 'express';
import ProductService from '../services/productService';

class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const allProducts = await this.productService.getAll();
      return res.status(200).json(allProducts);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };
}

export default ProductController;