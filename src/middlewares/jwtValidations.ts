import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IToken } from '../interfaces/interfaces';
import UserService from '../services/userService';

const SECRET = 'SECRET';

const TOKEN_NOT_FOUND = {
  message: 'Token not found',
};

const TOKEN_INVALID = {
  message: 'Invalid token',
};

class JwtValidations {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  public validateToken = async (req: Request, res:Response, next: NextFunction) => {
    try {
      const userToken = req.headers.authorization;

      if (!userToken) return res.status(401).json(TOKEN_NOT_FOUND);

      const verifiedJwt = verify(userToken, SECRET) as IToken;
      console.log(verifiedJwt);
      
      const allUsers = await this.service.getAll();
      const verifiedUser = allUsers.find((user) => (user.password === verifiedJwt.password));

      if (!verifiedUser) throw new Error();
      
      req.user = verifiedUser;
      next();
    } catch (error) {
      console.log(error);
      return res.status(401).json(TOKEN_INVALID);
    }
  };
}

export default JwtValidations;