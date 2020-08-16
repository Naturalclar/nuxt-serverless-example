// For checking locally
const { Builder } = require("nuxt");
const config = require("../nuxt.config");

import { createApp } from "./app";

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

export const createNuxtApp = async (config: Object) => {
  const { app, nuxt } = createApp(config);

  const builder = new Builder(nuxt);
  await builder.build();

  // @ts-ignore
  app.listen(port, host);
  console.log(`Server listening on http://${host}:${port}`);
};

createNuxtApp(config);
