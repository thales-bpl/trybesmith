import { Request, Response, NextFunction } from 'express';

const USERNAME_REQUIRED = {
  message: '"username" is required',
};

const PASSWORD_REQUIRED = {
  message: '"password" is required',
};

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json(USERNAME_REQUIRED);
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json(PASSWORD_REQUIRED);
  next();
};

export {
  validateUsername,
  validatePassword,
};