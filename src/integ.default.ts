import {
  App,
  Stack,
} from 'aws-cdk-lib';
import { Inspector2 } from './index';

const app = new App();
const stack = new Stack(app, 'AmazonInspector2');

new Inspector2(stack, 'Inspector2', {
  resourceTypes: ['EC2', 'ECR'],
});
