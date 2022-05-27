import { Request, Response } from 'express'; 
import UserService from '../services/userService';
import generateToken from '../middlewares/jwtGenerateToken';

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public post = async (req: Request, res: Response) => {
    try {
      const newUser = req.body;
      await this.userService.post(newUser);

      const { username, password } = req.body;
      const newToken = await generateToken(username, password);

      return res.status(201).json({ newToken });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };
}

export default UserController;