import {
  Resource, ResourceProps,
  aws_iam as iam,
  custom_resources as custom_resources,
  aws_logs as logs,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface Inspector2Props extends ResourceProps {
  /**
   * Select resource types to enable Amazon Inspector 2 scans for
   *
   * @default - Enable Amazon Inspector 2 for EC2 and ECR resources
   */
  readonly resourceTypes?: string[];
}

export class Inspector2 extends Resource {
  /**
   * Simple construct to enable Amazon Inspector 2
   */
  props: Inspector2Props;

  constructor(scope: Construct, id: string, props?: Inspector2Props) {
    super(scope, id);

    this.props = props ?? {};

    this.enableLocalAccount();
  }

  /**
   * Enable Amazon Inspector 2 in local AWS account
   */
  private enableLocalAccount() {
    const resource_types = this.props.resourceTypes ?? ['ECR', 'EC2'];

    const createOrUpdateEnableInspector2 = {
      service: 'Inspector2',
      action: 'enable',
      parameters: {
        resourceTypes: resource_types,
      },
      physicalResourceId: custom_resources.PhysicalResourceId.fromResponse(
        'accounts.0.accountId',
      ),
    };

    const deleteEnableInspector2 = {
      service: 'Inspector2',
      action: 'disable',
      physicalResourceId: custom_resources.PhysicalResourceId.fromResponse(
        'accounts.0.accountId',
      ),
    };

    const inspector_admin_role = new iam.Role(this, 'inspector_admin_role', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonInspector2FullAccess'),
      ],
    });

    new custom_resources.AwsCustomResource(this, 'enable_inspector2', {
      installLatestAwsSdk: true,
      policy: custom_resources.AwsCustomResourcePolicy.fromSdkCalls({
        resources: custom_resources.AwsCustomResourcePolicy.ANY_RESOURCE,
      }),
      role: inspector_admin_role,
      onCreate: createOrUpdateEnableInspector2,
      onUpdate: createOrUpdateEnableInspector2,
      onDelete: deleteEnableInspector2,
      logRetention: logs.RetentionDays.ONE_MONTH,
    });
  }
}