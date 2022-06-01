import { ILogin } from '../interfaces/interfaces';
import connection from '../models/connection';
import LoginModel from '../models/loginModel';

class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async getAll(): Promise<ILogin[]> {
    const allUsers = await this.model.getAll();
    return allUsers;
  }
}

export default LoginService;