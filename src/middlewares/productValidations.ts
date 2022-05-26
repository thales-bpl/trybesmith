import { Request, Response, NextFunction } from 'express';

const NAME_REQUIRED = {
  message: '"name" is required',
};

const INVALID_NAME_TYPE = {
  message: '"name" must be a string',
};

const INVALID_NAME_LENGTH = {
  message: '"name" length must be at least 3 characters long',
};

const AMOUNT_REQUIRED = {
  message: '"amount" is required',
};

const INVALID_AMOUNT_TYPE = {
  message: '"amount" must be a string',
};

const INVALID_AMOUNT_LENGTH = {
  message: '"amount" length must be at least 3 characters long',
};

const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json(NAME_REQUIRED);
  if (typeof name !== 'string') return res.status(422).json(INVALID_NAME_TYPE);
  if (name.length < 2) return res.status(422).json(INVALID_NAME_LENGTH);
  next();
};

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) return res.status(400).json(AMOUNT_REQUIRED);
  if (typeof amount !== 'string') return res.status(422).json(INVALID_AMOUNT_TYPE);
  if (amount.length < 2) return res.status(422).json(INVALID_AMOUNT_LENGTH);
  next();
};

export {
  validateName,
  validateAmount,
};