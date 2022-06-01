import { Request, Response } from 'express';
import generateToken from '../middlewares/jwtGenerateToken';
import LoginService from '../services/loginService';

const INVALID = {
  message: 'Username or password invalid',
};

class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      const allUsers = await this.service.getAll();

      const isUserValid = allUsers.find((user) => user.username === username);
      if (!isUserValid) return res.status(401).json(INVALID);
      if (password !== isUserValid.password) return res.status(401).json(INVALID);

      const token = await generateToken(username, password);
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
}

export default LoginController;