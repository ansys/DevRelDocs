---
category: min_max
plugin: core
license: None
---

# min_max:min max by entity

**Version: 0.0.0**

## Description


Computes, for each entity and each component, the minimum and the maximum across all fields of the input fields container.

Entity ids are matched across fields.
A field is skipped for a given entity if that entity id is not present in its scoping;
if the entity id has not been seen in any prior field, it is added to the output with the current field data.
Fields with no data are skipped entirely.

The outputs share the same scoping as the first non-empty input field, augmented with any entity ids first seen in later fields.

Within each input field, all elementary values contribute to the per-entity reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

**When to use:** you want to keep the entity axis while reducing over the fields axis.
Example: envelope of nodal stress across load cases, giving one min/max value per node and per component.
Use `min_max_fc` to get one summary per field instead, or `min_max_over_time_by_entity` when the fields are indexed by a `time` label.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container whose fields are aggregated per entity and per component.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_min](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **1**| [field_max](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field_min (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of per-entity, per-component minima across all input fields.

<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of per-entity, per-component maxima across all input fields.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: min_max_by_entity

 **Full name**: min_max.min_max_by_entity

 **Internal name**: min_max_by_entity

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_by_entity"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_by_entity() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
my_field_min = op.outputs.field_min()
my_field_max = op.outputs.field_max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.min_max_by_entity() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.