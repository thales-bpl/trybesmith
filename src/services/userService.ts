import connection from '../models/connection';
import UserModel from '../models/userModel';
import { IUser } from '../interfaces/interfaces';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async post(user: IUser): Promise<IUser> {
    return this.model.post(user);
  }
}

export default UserService;