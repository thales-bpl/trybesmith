import { Request, Response, NextFunction } from 'express';

const USERNAME_REQUIRED = {
  message: '"username" is required',
};

const INVALID_USERNAME_TYPE = {
  message: '"username" must be a string',
};

const INVALID_USERNAME_LENGTH = {
  message: '"username" length must be at least 3 characters long',
};

const CLASSE_REQUIRED = {
  message: '"classe" is required',
};

const INVALID_CLASSE_TYPE = {
  message: '"classe" must be a string',
};

const INVALID_CLASSE_LENGTH = {
  message: '"classe" length must be at least 3 characters long',
};

const LEVEL_REQUIRED = {
  message: '"level" is required',
};

const INVALID_LEVEL_TYPE = {
  message: '"level" must be a number',
};

const INVALID_LEVEL_MINIMUM = {
  message: '"level" must be greater than or equal to 1',
};

const PASSWORD_REQUIRED = {
  message: '"password" is required',
};

const INVALID_PASSWORD_TYPE = {
  message: '"password" must be a string',
};

const INVALID_PASSWORD_LENGTH = {
  message: '"password" length must be at least 8 characters long',
};

const validateUsername = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json(USERNAME_REQUIRED);
  if (typeof username !== 'string') return res.status(422).json(INVALID_USERNAME_TYPE);
  if (username.length < 3) return res.status(422).json(INVALID_USERNAME_LENGTH);
  next();
};

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) return res.status(400).json(CLASSE_REQUIRED);
  if (typeof classe !== 'string') return res.status(422).json(INVALID_CLASSE_TYPE);
  if (classe.length < 3) return res.status(422).json(INVALID_CLASSE_LENGTH);
  next();
};

const validateLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level && level !== 0) return res.status(400).json(LEVEL_REQUIRED);
  if (typeof level !== 'number') return res.status(422).json(INVALID_LEVEL_TYPE);
  if (level < 1) return res.status(422).json(INVALID_LEVEL_MINIMUM);
  next();
};

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json(PASSWORD_REQUIRED);
  if (typeof password !== 'string') return res.status(422).json(INVALID_PASSWORD_TYPE);
  if (password.length < 8) return res.status(422).json(INVALID_PASSWORD_LENGTH);
  next();
};

export {
  validateUsername,
  validateClasse,
  validateLevel,
  validatePassword,
};