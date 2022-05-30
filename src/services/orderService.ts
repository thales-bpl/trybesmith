import OrderModel from '../models/orderModel';
import connection from '../models/connection';
import { IOrder } from '../interfaces/interfaces';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}

export default OrderService;