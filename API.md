# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### Inspector2 <a name="oblcc-amazon-inspector-v2.Inspector2" id="oblccamazoninspectorv2inspector2"></a>

Simple construct to enable Amazon Inspector 2.

#### Initializers <a name="oblcc-amazon-inspector-v2.Inspector2.Initializer" id="oblccamazoninspectorv2inspector2initializer"></a>

```typescript
import { Inspector2 } from 'oblcc-amazon-inspector-v2'

new Inspector2(scope: Construct, id: string, props?: Inspector2Props)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#oblccamazoninspectorv2inspector2parameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#oblccamazoninspectorv2inspector2parameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#oblccamazoninspectorv2inspector2parameterprops) | [`oblcc-amazon-inspector-v2.Inspector2Props`](#oblcc-amazon-inspector-v2.Inspector2Props) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="oblcc-amazon-inspector-v2.Inspector2.parameter.scope" id="oblccamazoninspectorv2inspector2parameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="oblcc-amazon-inspector-v2.Inspector2.parameter.id" id="oblccamazoninspectorv2inspector2parameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2.parameter.props" id="oblccamazoninspectorv2inspector2parameterprops"></a>

- *Type:* [`oblcc-amazon-inspector-v2.Inspector2Props`](#oblcc-amazon-inspector-v2.Inspector2Props)

---





## Structs <a name="Structs" id="structs"></a>

### Inspector2Props <a name="oblcc-amazon-inspector-v2.Inspector2Props" id="oblccamazoninspectorv2inspector2props"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { Inspector2Props } from 'oblcc-amazon-inspector-v2'

const inspector2Props: Inspector2Props = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`analyticsReporting`](#oblccamazoninspectorv2inspector2propspropertyanalyticsreporting) | `boolean` | Include runtime versioning information in this Stack. |
| [`description`](#oblccamazoninspectorv2inspector2propspropertydescription) | `string` | A description of the stack. |
| [`env`](#oblccamazoninspectorv2inspector2propspropertyenv) | [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment) | The AWS environment (account/region) where this stack will be deployed. |
| [`stackName`](#oblccamazoninspectorv2inspector2propspropertystackname) | `string` | Name to deploy the stack with. |
| [`synthesizer`](#oblccamazoninspectorv2inspector2propspropertysynthesizer) | [`aws-cdk-lib.IStackSynthesizer`](#aws-cdk-lib.IStackSynthesizer) | Synthesis method to use while deploying this stack. |
| [`tags`](#oblccamazoninspectorv2inspector2propspropertytags) | {[ key: string ]: `string`} | Stack tags that will be applied to all the taggable resources and the stack itself. |
| [`terminationProtection`](#oblccamazoninspectorv2inspector2propspropertyterminationprotection) | `boolean` | Whether to enable termination protection for this stack. |
| [`resourceTypes`](#oblccamazoninspectorv2inspector2propspropertyresourcetypes) | `string`[] | Select resource types to enable Amazon Inspector 2 scans for. |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.analyticsReporting" id="oblccamazoninspectorv2inspector2propspropertyanalyticsreporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* `boolean`
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `description`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.description" id="oblccamazoninspectorv2inspector2propspropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.env" id="oblccamazoninspectorv2inspector2propspropertyenv"></a>

```typescript
public readonly env: Environment;
```

- *Type:* [`aws-cdk-lib.Environment`](#aws-cdk-lib.Environment)
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to select the indicated environment (recommended for production stacks), or to the values of environment variables `CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment depend on the AWS credentials/configuration that the CDK CLI is executed under (recommended for development stacks).  If the `Stack` is instantiated inside a `Stage`, any undefined `region`/`account` fields from `env` will default to the same field on the encompassing `Stage`, if configured there.  If either `region` or `account` are not set nor inherited from `Stage`, the Stack will be considered "*environment-agnostic*"". Environment-agnostic stacks can be deployed to any environment but may not be able to take advantage of all features of the CDK. For example, they will not be able to use environmental context lookups such as `ec2.Vpc.fromLookup` and will not automatically translate Service Principals to the right format based on the environment's AWS partition, and other such enhancements.

---

##### `stackName`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.stackName" id="oblccamazoninspectorv2inspector2propspropertystackname"></a>

```typescript
public readonly stackName: string;
```

- *Type:* `string`
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `synthesizer`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.synthesizer" id="oblccamazoninspectorv2inspector2propspropertysynthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* [`aws-cdk-lib.IStackSynthesizer`](#aws-cdk-lib.IStackSynthesizer)
- *Default:* `DefaultStackSynthesizer` if the `@aws-cdk/core:newStyleStackSynthesis` feature flag is set, `LegacyStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

---

##### `tags`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.tags" id="oblccamazoninspectorv2inspector2propspropertytags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.terminationProtection" id="oblccamazoninspectorv2inspector2propspropertyterminationprotection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* `boolean`
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `resourceTypes`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.resourceTypes" id="oblccamazoninspectorv2inspector2propspropertyresourcetypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* `string`[]
- *Default:* Enable Amazon Inspector 2 for EC2 and ECR resources

Select resource types to enable Amazon Inspector 2 scans for.

---



