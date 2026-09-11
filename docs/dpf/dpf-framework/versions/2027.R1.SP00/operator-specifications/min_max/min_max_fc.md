---
category: min_max
plugin: core
license: None
---

# min_max:over fields container

**Version: 0.0.0**

## Description


Computes, for each field of the input fields container and for each component, the minimum and the maximum across all entities of that field.

Also known as component-wise min/max over a fields container.

The output minimum (pin 0) and maximum (pin 1) are fields with one entity per input field.
Each entity holds, for each component, the min or max value found in the corresponding input field.
The entity ids in the output scoping are the input field indices in the fields container.

Within each input field, all elementary values contribute to the reduction: elemental-nodal expansions and shell-layer values (when present) are folded into the same per-component min/max.

**When to use:** you want one per-component summary per field of the container, without reducing across fields.
Example: peak of each stress component per body when the container groups fields by body id.
Use `min_max` for a single field, `min_max_by_entity` to keep per-entity resolution across fields, or `min_max_over_label_fc` to group fields by label before reducing.


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

Fields container over which per-field, per-component minima and maxima are computed.


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

Field of per-field, per-component minima. One entity per input field.

<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of per-field, per-component maxima. One entity per input field.


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

 **Scripting name**: min_max_fc

 **Full name**: min_max.min_max_fc

 **Internal name**: min_max_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_fc"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_fc() # operator instantiation
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

op = dpf.operators.min_max.min_max_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.