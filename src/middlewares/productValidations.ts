import { Request, Response, NextFunction } from 'express';

const NAME_REQUIRED = {
  error: 'Name is required',
};

const INVALID_NAME_TYPE = {
  error: 'Name must be a string',
};

const INVALID_NAME_LENGTH = {
  error: 'Name must be longer than 2 characters',
};

const AMOUNT_REQUIRED = {
  error: 'Amount is required',
};

const INVALID_AMOUNT_TYPE = {
  error: 'Amount must be a string',
};

const INVALID_AMOUNT_LENGTH = {
  error: 'Amount must be longer than 2 characters',
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