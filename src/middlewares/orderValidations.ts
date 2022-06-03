import { Request, Response, NextFunction } from 'express';

const PRODUCT_ID_REQUIRED = {
  message: '"productsIds" is required',
};

const PRODUCT_ID_INVALID = {
  message: '"productsIds" must be an array',
};

const PRODUCT_ID_EMPTY = {
  message: '"productsIds" must include only numbers',
};

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  const { productsIds } = req.body;

  if (!productsIds) return res.status(400).json(PRODUCT_ID_REQUIRED);
  if (!Array.isArray(productsIds)) return res.status(422).json(PRODUCT_ID_INVALID);
  
  const isNotNumber = productsIds.some((product: number) => typeof product !== 'number');
  if (productsIds.length === 0 || isNotNumber) return res.status(422).json(PRODUCT_ID_EMPTY);

  next();
};

export default validateOrder;