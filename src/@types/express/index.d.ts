import { IUser } from '../../interfaces/interfaces';

// Source: https://stackoverflow.com/a/58788706/17501748
declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}