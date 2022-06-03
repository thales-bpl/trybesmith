import { Request, Response } from 'express';
import OrderService from '../services/orderService';

const INVALID_TOKEN = {
  message: 'Invalid token',
};

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
      // console.log('post order controller');
      const currentUser = req.user;
      const { productsIds } = req.body;
      // console.log(currentUser);
      
      // if (!userId || !productsIds) return res.status(401).json(INVALID_TOKEN);
      if (typeof currentUser.id === undefined) return res.status(401).json(INVALID_TOKEN);
      if (!currentUser.id) return res.status(401).json(INVALID_TOKEN);

      const newOrder = await this.orderService.postOrder(currentUser.id, productsIds);
      return res.status(201).json(newOrder);
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
}

export default OrderController;
