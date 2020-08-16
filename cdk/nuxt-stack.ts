import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { LambdaRestApi } from "@aws-cdk/aws-apigateway";
import { Code, Function, Runtime } from "@aws-cdk/aws-lambda";
import { join } from "path";

export class NuxtStack extends Stack {
  public constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const code = Code.fromAsset(join(__dirname, "../dist"));

    new LambdaRestApi(this, "SampleNuxt", {
      handler: new Function(this, "HomeHandler", {
        runtime: Runtime.NODEJS_12_X,
        code,
        handler: "handler.render",
        environment: {
          NODE_ENV: "production"
        }
      })
    });
  }
}
