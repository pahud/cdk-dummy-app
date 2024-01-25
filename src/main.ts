import {
  App, Stack, StackProps,
  aws_sqs as sqs,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new sqs.Queue(this, 'DummyQueue');

  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.TARGET_ACCOUNT ?? process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.TARGET_REGION ?? process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'cdk-dummy-app-dev', { env: devEnv });
// new MyStack(app, 'cdk-dummy-app-prod', { env: prodEnv });

app.synth();