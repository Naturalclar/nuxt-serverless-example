import { Request, Response, NextFunction } from "express";

export const setHeadersMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.removeHeader("x-powered-by");
  res.header("no-cache", "Set-Cookie");
  res.header("x-xss-protection", "1; mode=block");
  res.header("x-frame-options", "DENY");
  res.header("x-content-type-options", "nosniff");
  next();
};
