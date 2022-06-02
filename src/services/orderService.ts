import OrderModel from '../models/orderModel';
import ProductModel from '../models/productModel';
import connection from '../models/connection';
import { IOrder } from '../interfaces/interfaces';

class OrderService {
  public model: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  public async postOrder(userId: number, productsIds: number[]): Promise<IOrder> {
    await this.model.postOrder(userId);

    productsIds.forEach((product) => this.productModel.updateProductOrder(userId, product));

    return { userId, productsIds };
  }
}

export default OrderService;