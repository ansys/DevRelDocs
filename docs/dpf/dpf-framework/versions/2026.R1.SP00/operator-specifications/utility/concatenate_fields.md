---
category: utility
plugin: core
license: None
---

# utility:concatenate fields

**Version: 0.0.0**

## Description

Concatenates fields into a unique one by incrementing the number of components.

Example:
- Field1 components: { UX, UY, UZ }
- Field2 components: { RX, RY, RZ }
- Output field : { UX, UY, UZ, RX, RY, RZ }

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-3</strong> | [rescoping_value](#input_-3) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-2</strong> | [reference_scoping_index](#input_-2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-1</strong> | [field_support](#input_-1) |  |`abstract_field_support` |
| <strong>0</strong> | [fields](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<field>`](../../core-concepts/dpf-types.md#vector<field>) |


<a id="input_-3"></a>
### rescoping_value (Pin -3)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Value used to fill the missing values when scopings are different. Default is 0.

<a id="input_-2"></a>
### reference_scoping_index (Pin -2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Pin of the field of which to take the scoping for the output field.
If -1 all scopings will be merged, if -2 all scopings will be intersected. Default is -1

<a id="input_-1"></a>
### field_support (Pin -1)

- **Required:** No
- **Expected type(s):** `abstract_field_support`

Support of the output field.

<a id="input_0"></a>
### fields (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`vector<field>`](../../core-concepts/dpf-types.md#vector<field>)

A vector of fields to merge from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_fields](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### merged_fields (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field which has as many components as the sum of all the input fields' numbers of components.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [read_inputs_in_parallel](../../core-concepts/operator-configurations.md#read_inputs_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: concatenate_fields

 **Full name**: utility.concatenate_fields

 **Internal name**: merge::concatenate_fields

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::concatenate_fields"); // operator instantiation
op.connect(-3, my_rescoping_value);
op.connect(-2, my_reference_scoping_index);
op.connect(-1, my_field_support);
op.connect(0, my_fields);
ansys::dpf::Field my_merged_fields = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.concatenate_fields() # operator instantiation
op.inputs.rescoping_value.connect(my_rescoping_value)
op.inputs.reference_scoping_index.connect(my_reference_scoping_index)
op.inputs.field_support.connect(my_field_support)
op.inputs.fields1.connect(my_fields1)
op.inputs.fields2.connect(my_fields2)
my_merged_fields = op.outputs.merged_fields()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.concatenate_fields() # operator instantiation
op.inputs.rescoping_value.Connect(my_rescoping_value)
op.inputs.reference_scoping_index.Connect(my_reference_scoping_index)
op.inputs.field_support.Connect(my_field_support)
op.inputs.fields.Connect(my_fields)
my_merged_fields = op.outputs.merged_fields.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.