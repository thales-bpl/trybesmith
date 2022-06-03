import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces/interfaces';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as IProduct[];
  }

  public async post(name: string, amount: string): Promise<IProduct> {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (? , ?);';
    const result = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    const [insertedData] = result;
    const { insertId } = insertedData;
    return { id: insertId, name, amount };
  }

  public async updateProductOrder(orderId: number | undefined, productId: number): Promise<void> {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
    await this.connection.execute(query, [orderId, productId]);
  }
}

export default ProductModel;