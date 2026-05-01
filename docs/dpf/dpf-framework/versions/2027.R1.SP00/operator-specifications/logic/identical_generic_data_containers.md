---
category: logic
plugin: core
license: None
---

# logic:same generic data containers?

**Version: 0.0.0**

## Description

Takes two generic data containers and compares them. Supported types: Field, FieldsContainer, Mesh, MeshesContainer, PropertyField, PropertyFieldsContainer, Scoping, ScopingsContainer, StringFieldstandard types (double, int, string, vector of int, doubles, string)Note: all inputs related to fields, mesh, and so on are passed to each property check.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [generic_data_containerA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>1</strong> | [generic_data_containerB](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |
| <strong>2</strong> | [double_value](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [double_tolerance](#input_3) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [compare_auxiliary](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### generic_data_containerA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)



<a id="input_1"></a>
### generic_data_containerB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)



<a id="input_2"></a>
### double_value (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14).

<a id="input_3"></a>
### double_tolerance (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical. Formula is (v1-v2)/v2 < relativeTol. Default is 0.001.

<a id="input_4"></a>
### compare_auxiliary (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

For meshes and meshescontainer: compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [included](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
|  **1**| [message](#output_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### included (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

bool (true if belongs...)

<a id="output_1"></a>
### message (Pin 1)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_generic_data_containers

 **Full name**: logic.identical_generic_data_containers

 **Internal name**: compare::generic_data_container

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::generic_data_container"); // operator instantiation
op.connect(0, my_generic_data_containerA);
op.connect(1, my_generic_data_containerB);
op.connect(2, my_double_value);
op.connect(3, my_double_tolerance);
op.connect(4, my_compare_auxiliary);
bool my_included = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_generic_data_containers() # operator instantiation
op.inputs.generic_data_containerA.connect(my_generic_data_containerA)
op.inputs.generic_data_containerB.connect(my_generic_data_containerB)
op.inputs.double_value.connect(my_double_value)
op.inputs.double_tolerance.connect(my_double_tolerance)
op.inputs.compare_auxiliary.connect(my_compare_auxiliary)
my_included = op.outputs.included()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_generic_data_containers() # operator instantiation
op.inputs.generic_data_containerA.Connect(my_generic_data_containerA)
op.inputs.generic_data_containerB.Connect(my_generic_data_containerB)
op.inputs.double_value.Connect(my_double_value)
op.inputs.double_tolerance.Connect(my_double_tolerance)
op.inputs.compare_auxiliary.Connect(my_compare_auxiliary)
my_included = op.outputs.included.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.