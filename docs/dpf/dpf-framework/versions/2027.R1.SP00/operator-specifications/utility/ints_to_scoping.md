---
category: utility
plugin: core
license: None
---

# utility:convert to scoping

**Version: 0.0.0**

## Description

Creates a scoping from integer data. Converts single integers, integer vectors, or existing scopings into a properly formatted DPF scoping.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [ids](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>1</strong> | [location](#input_1) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [upper_bound](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="input_0"></a>
### ids (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping)

Integer ID(s) for the scoping: single int, vector of ints, or existing scoping

<a id="input_1"></a>
### location (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Location string for the scoping (e.g., 'Nodal', 'Elemental'). Default is empty

<a id="input_2"></a>
### upper_bound (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping)

Upper bound for creating a range scoping. Creates IDs from pin 0 value to this upper bound (inclusive)


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Generated scoping with the specified IDs and location


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: ints_to_scoping

 **Full name**: utility.ints_to_scoping

 **Internal name**: scopingify

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scopingify"); // operator instantiation
op.connect(0, my_ids);
op.connect(1, my_location);
op.connect(2, my_upper_bound);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.ints_to_scoping() # operator instantiation
op.inputs.ids.connect(my_ids)
op.inputs.location.connect(my_location)
op.inputs.upper_bound.connect(my_upper_bound)
my_scoping = op.outputs.scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.ints_to_scoping() # operator instantiation
op.inputs.ids.Connect(my_ids)
op.inputs.location.Connect(my_location)
op.inputs.upper_bound.Connect(my_upper_bound)
my_scoping = op.outputs.scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.