import { Pool } from 'mysql2/promise';
import { ILogin } from '../interfaces/interfaces';

class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<ILogin[]> {
    const query = 'SELECT * from Trybesmith.Users;';
    const result = await this.connection.execute(query);
    const [rows] = result;
    return rows as ILogin[];
  }
}

export default LoginModel;