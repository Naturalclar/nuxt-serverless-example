import awsServerlessExpress from "aws-serverless-express";
import { Handler } from "aws-lambda";
import { createApp } from "./app";

export const createNuxtApp = (config: Object): Handler => {
  const { app } = createApp(config);

  const server = awsServerlessExpress.createServer(app, void 0, [
    "application/javascript",
    "application/json",
    "application/manifest+json",
    "application/octet-stream",
    "application/xml",
    "font/eot",
    "font/opentype",
    "font/otf",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/x-icon",
    "text/comma-separated-values",
    "text/css",
    "text/html",
    "text/javascript",
    "text/plain",
    "text/text",
    "text/xml",
    "application/rss+xml",
    "application/atom+xml"
  ]);

  const handler: Handler = async (event, context) => {
    console.log("[info]", "Event", JSON.stringify(event));
    awsServerlessExpress.proxy(server, event, context);
  };

  return handler;
};
