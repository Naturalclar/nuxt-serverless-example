import { App } from "@aws-cdk/core";
import { NuxtStack } from "./nuxt-stack";

const app = new App();

const env = {
  region: "ap-northeast-1"
};

new NuxtStack(app, "SampleNuxtStack", { env });
