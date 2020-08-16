import express, { Request, Response, NextFunction } from "express";
import { setHeadersMiddleware } from "./middlewares/header-middleware";
import { loggerMiddleware } from "./middlewares/logger-middleware";

const { Nuxt } = require("nuxt");

export const createApp = (config: Object) => {
  const app = express();

  const isDev = process.env.NODE_ENV !== "production";

  const nuxt = new Nuxt({
    ...config,
    dev: isDev,
    _start: !isDev
  });
  /** middleware */
  app.use(setHeadersMiddleware);

  app.use(loggerMiddleware);

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    await nuxt.ready();
    nuxt.render(req, res, next);
  });

  return { app, nuxt };
};
