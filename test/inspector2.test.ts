// import { Template } from "@aws-cdk/assertions";
import { App, Stack, assertions } from 'aws-cdk-lib';
import { Inspector2 } from '../src';

test('create stack', () => {
  const app = new App();
  const stack = new Stack(app);
  new Inspector2(stack, 'Inspector2', {});
  const template = assertions.Template.fromStack(stack);
  template.hasResource('AWS::IAM::Role', {});
  template.hasResource('Custom::AWS', {});
  template.hasResource('AWS::Lambda::Function', {});
});