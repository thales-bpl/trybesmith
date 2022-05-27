import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/interfaces';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async post(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`;
    const newUser = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    const [dataInserted] = newUser;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }
}

export default UserModel;