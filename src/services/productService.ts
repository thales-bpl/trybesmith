import ProductModel from '../models/productModel';
import connection from '../models/connection';
import { IProduct } from '../interfaces/interfaces';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}

export default ProductService;