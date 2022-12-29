import { NextFunction, Request, Response } from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('Sth wrong:', err);

  res.status(400).send({
    message: err.message,
  });
}
