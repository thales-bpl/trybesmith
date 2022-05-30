import { Pool } from 'mysql2/promise';
import { IOrder } from '../interfaces/interfaces';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const query = `SELECT Orders.id, Orders.userId, JSON_ARRAYAGG(Products.id) AS productsIds
    FROM Trybesmith.Orders as Orders
    INNER JOIN Trybesmith.Products as Products
    ON Orders.id = Products.orderId
    GROUP BY Orders.id
    ORDER BY Orders.userId;`;
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IOrder[];
  }
}

export default OrderModel;