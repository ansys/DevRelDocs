---
category: math
plugin: core
license: None
---

# math:min/max over time

**Version: 0.0.0**

## Description


Dispatch operator that selects and runs a minimum/maximum operator over time or frequency, based on the integer selector on pin 5.

Selector values on pin 5:

- `0`: `min_max_by_time` - per-step, per-component minimum and maximum, aggregating every entity of each field (elemental-nodal values collapse into the reduction).
- `1`: `max_over_time_by_entity` - per-entity, per-component maximum across all time or frequency steps.
- `2`: `time_of_max_by_entity` - time or frequency at which each per-entity, per-component maximum occurs.
- `7`: `min_over_time_by_entity` - per-entity, per-component minimum across all time or frequency steps.
- `8`: `time_of_min_by_entity` - time or frequency at which each per-entity, per-component minimum occurs.

Selectors 1, 2, 7 and 8 keep the entity axis: the underlying operator (`min_max_over_time_by_entity`) returns one value per entity, per component and per shell layer when available. Selector 0 (`min_max_by_time`) reduces across entities instead.

Output pin 0 holds the primary result of the selected operator.
Output pin 1 is optional and populated only when the selected operator produces two outputs (currently only selector `0`).


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>5</strong> | [int32](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Input fields container passed through to the selected underlying operator.

<a id="input_5"></a>
### int32 (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Selector integer that chooses the underlying operator. Supported values: `0` (min_max_by_time), `1` (max_over_time_by_entity), `2` (time_of_max_by_entity), `7` (min_over_time_by_entity), `8` (time_of_min_by_entity).


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_container_1](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [field_container_2](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### field_container_1 (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Primary result forwarded from the selected underlying operator.

<a id="output_1"></a>
### field_container_2 (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Secondary result forwarded from the selected underlying operator. Populated only when the underlying operator produces two outputs (currently only selector `0` populates this pin).


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: mechanical_min_max_over_time

 **Full name**: math.mechanical_min_max_over_time

 **Internal name**: mechanical::min_max_over_time

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical::min_max_over_time"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(5, my_int32);
ansys::dpf::FieldsContainer my_field_container_1 = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_field_container_2 = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.mechanical_min_max_over_time() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.int32.connect(my_int32)
my_field_container_1 = op.outputs.field_container_1()
my_field_container_2 = op.outputs.field_container_2()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.mechanical_min_max_over_time() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.int32.Connect(my_int32)
my_field_container_1 = op.outputs.field_container_1.GetData()
my_field_container_2 = op.outputs.field_container_2.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.