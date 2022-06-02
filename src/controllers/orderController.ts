import { Request, Response } from 'express';
import OrderService from '../services/orderService';

class OrderController {
  private orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  public getAll = async (req: Request, res: Response) => {
    try {
      const orders = await this.orderService.getAll();
      return res.status(200).json(orders);
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };

  // TO-DO: validar JWT e injetar req.user
  public post = async (req: Request, res: Response) => {
    try {
      const userId = req.user.id;
      const { productsIds } = req.body;

      // if (!userId || !productsIds) throw new Error();

      const newOrder = await this.orderService.postOrder(userId, productsIds);
      return res.status(201).json(newOrder);
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
}

export default OrderController;
