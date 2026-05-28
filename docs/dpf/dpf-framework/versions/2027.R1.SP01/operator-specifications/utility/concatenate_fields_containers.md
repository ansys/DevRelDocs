---
category: utility
plugin: core
license: None
---

# utility:concatenate fields containers

**Version: 0.0.0**

## Description

Concatenates fields containers into a unique one by concatenating each of their fields.

Example:
- Fields Container 1:
	- Field1 with components: &#123; UX, UY, UZ &#125;
	- Field2 with components: &#123; VX, VY, VZ &#125;
- Fields Container 2:
	- Field1 with components: &#123; RX, RY, RZ &#125;
	- Field2 with components: &#123; AX, AY, AZ &#125;
- Output Fields Container:
	- Field1 with components: &#123; UX, UY, UZ, RX, RY, RZ &#125;
	- Field2 with components: &#123; VX, VY, VZ, AX, AY, AZ &#125;

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-3</strong> | [rescoping_value](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/concatenate_fields_containers) |  |[`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>-2</strong> | [reference_scoping_index](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/concatenate_fields_containers) |  |[`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>-1</strong> | [field_support](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/concatenate_fields_containers) |  |`abstract_field_support` |
| <strong>0</strong> | [fields_containers](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/concatenate_fields_containers) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector&lt;fields_container&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_-3"></a>
### rescoping_value (Pin -3)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Value used to fill the missing values when scopings are different. Default is 0.

<a id="input_-2"></a>
### reference_scoping_index (Pin -2)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Pin of the field of which to take the scoping for the output field.
If -1 all scopings will be merged, if -2 all scopings will be intersected. Default is -1.

<a id="input_-1"></a>
### field_support (Pin -1)

- **Required:** No
- **Expected type(s):** `abstract_field_support`

Support of the output fields container's fields. By default each field has the support of the corresponding field of the first fields container.

<a id="input_0"></a>
### fields_containers (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`vector&lt;fields_container&gt;`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

A vector of fields containers to merge from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_collections](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/utility/concatenate_fields_containers) |[`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### merged_collections (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

Fields containers with fields which have as many components as the sum of all the input fields' numbers of components of the same index.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [read_inputs_in_parallel](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: concatenate_fields_containers

 **Full name**: utility.concatenate_fields_containers

 **Internal name**: merge::concatenate_fields_containers

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::concatenate_fields_containers"); // operator instantiation
op.connect(-3, my_rescoping_value);
op.connect(-2, my_reference_scoping_index);
op.connect(-1, my_field_support);
op.connect(0, my_fields_containers);
ansys::dpf::FieldsContainer my_merged_collections = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.concatenate_fields_containers() # operator instantiation
op.inputs.rescoping_value.connect(my_rescoping_value)
op.inputs.reference_scoping_index.connect(my_reference_scoping_index)
op.inputs.field_support.connect(my_field_support)
op.inputs.fields_containers1.connect(my_fields_containers1)
op.inputs.fields_containers2.connect(my_fields_containers2)
my_merged_collections = op.outputs.merged_collections()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.concatenate_fields_containers() # operator instantiation
op.inputs.rescoping_value.Connect(my_rescoping_value)
op.inputs.reference_scoping_index.Connect(my_reference_scoping_index)
op.inputs.field_support.Connect(my_field_support)
op.inputs.fields_containers.Connect(my_fields_containers)
my_merged_collections = op.outputs.merged_collections.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.