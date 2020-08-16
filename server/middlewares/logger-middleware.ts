import { Response, NextFunction } from 'express';
import { Request } from 'express-serve-static-core';
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('[info]', 'Request URL: ', req.url);
  next();
};
