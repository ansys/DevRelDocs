---
category: logic
plugin: core
license: None
---

# logic:same meshes?

**Version: 0.0.0**

## Description

Takes two meshes and compares them. Note: When comparing mesh properties, the current behaviour is to verify that the properties in the first mesh (pin 0) are included in the second mesh (pin 1).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [meshA](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [meshB](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>2</strong> | [small_value](#input_2) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [tolerance](#input_3) |  |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [compare_auxiliary](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### meshA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### meshB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_2"></a>
### small_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

define what is a small value for numeric comparison (default value:1.0e-14).

<a id="input_3"></a>
### tolerance (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

define the relative tolerance ceil for numeric comparison (default is 0.001).

<a id="input_4"></a>
### compare_auxiliary (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

compare auxiliary data (i.e property fields, scopings...). Default value is 'false'.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [are_identical](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### are_identical (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)




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

 **Scripting name**: identical_meshes

 **Full name**: logic.identical_meshes

 **Internal name**: compare::mesh

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::mesh"); // operator instantiation
op.connect(0, my_meshA);
op.connect(1, my_meshB);
op.connect(2, my_small_value);
op.connect(3, my_tolerance);
op.connect(4, my_compare_auxiliary);
bool my_are_identical = op.getOutput<bool>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_meshes() # operator instantiation
op.inputs.meshA.connect(my_meshA)
op.inputs.meshB.connect(my_meshB)
op.inputs.small_value.connect(my_small_value)
op.inputs.tolerance.connect(my_tolerance)
op.inputs.compare_auxiliary.connect(my_compare_auxiliary)
my_are_identical = op.outputs.are_identical()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_meshes() # operator instantiation
op.inputs.meshA.Connect(my_meshA)
op.inputs.meshB.Connect(my_meshB)
op.inputs.small_value.Connect(my_small_value)
op.inputs.tolerance.Connect(my_tolerance)
op.inputs.compare_auxiliary.Connect(my_compare_auxiliary)
my_are_identical = op.outputs.are_identical.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.