# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### Inspector2 <a name="oblcc-amazon-inspector-v2.Inspector2" id="oblccamazoninspectorv2inspector2"></a>

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



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`props`](#oblccamazoninspectorv2inspector2propertyprops)<span title="Required">*</span> | [`oblcc-amazon-inspector-v2.Inspector2Props`](#oblcc-amazon-inspector-v2.Inspector2Props) | Simple construct to enable Amazon Inspector 2. |

---

##### `props`<sup>Required</sup> <a name="oblcc-amazon-inspector-v2.Inspector2.property.props" id="oblccamazoninspectorv2inspector2propertyprops"></a>

```typescript
public readonly props: Inspector2Props;
```

- *Type:* [`oblcc-amazon-inspector-v2.Inspector2Props`](#oblcc-amazon-inspector-v2.Inspector2Props)

Simple construct to enable Amazon Inspector 2.

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
| [`account`](#oblccamazoninspectorv2inspector2propspropertyaccount) | `string` | The AWS account ID this resource belongs to. |
| [`environmentFromArn`](#oblccamazoninspectorv2inspector2propspropertyenvironmentfromarn) | `string` | ARN to deduce region and account from. |
| [`physicalName`](#oblccamazoninspectorv2inspector2propspropertyphysicalname) | `string` | The value passed in by users to the physical name prop of the resource. |
| [`region`](#oblccamazoninspectorv2inspector2propspropertyregion) | `string` | The AWS region this resource belongs to. |
| [`resourceTypes`](#oblccamazoninspectorv2inspector2propspropertyresourcetypes) | `string`[] | Select resource types to enable Amazon Inspector 2 scans for. |

---

##### `account`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.account" id="oblccamazoninspectorv2inspector2propspropertyaccount"></a>

```typescript
public readonly account: string;
```

- *Type:* `string`
- *Default:* the resource is in the same account as the stack it belongs to

The AWS account ID this resource belongs to.

---

##### `environmentFromArn`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.environmentFromArn" id="oblccamazoninspectorv2inspector2propspropertyenvironmentfromarn"></a>

```typescript
public readonly environmentFromArn: string;
```

- *Type:* `string`
- *Default:* take environment from `account`, `region` parameters, or use Stack environment.

ARN to deduce region and account from.

The ARN is parsed and the account and region are taken from the ARN. This should be used for imported resources.  Cannot be supplied together with either `account` or `region`.

---

##### `physicalName`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.physicalName" id="oblccamazoninspectorv2inspector2propspropertyphysicalname"></a>

```typescript
public readonly physicalName: string;
```

- *Type:* `string`
- *Default:* The physical name will be allocated by CloudFormation at deployment time

The value passed in by users to the physical name prop of the resource.

`undefined` implies that a physical name will be allocated by    CloudFormation during deployment. - a concrete value implies a specific physical name - `PhysicalName.GENERATE_IF_NEEDED` is a marker that indicates that a physical will only be generated    by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated by CloudFormation.

---

##### `region`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.region" id="oblccamazoninspectorv2inspector2propspropertyregion"></a>

```typescript
public readonly region: string;
```

- *Type:* `string`
- *Default:* the resource is in the same region as the stack it belongs to

The AWS region this resource belongs to.

---

##### `resourceTypes`<sup>Optional</sup> <a name="oblcc-amazon-inspector-v2.Inspector2Props.property.resourceTypes" id="oblccamazoninspectorv2inspector2propspropertyresourcetypes"></a>

```typescript
public readonly resourceTypes: string[];
```

- *Type:* `string`[]
- *Default:* Enable Amazon Inspector 2 for EC2 and ECR resources

Select resource types to enable Amazon Inspector 2 scans for.

---



