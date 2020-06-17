import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authotized-error';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // @ts-ignore
  if (!req.currentUser) {
    throw new NotAuthorizedError();
  }

  next();
};
