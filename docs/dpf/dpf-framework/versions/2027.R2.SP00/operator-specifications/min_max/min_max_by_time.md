---
category: min_max
plugin: core
license: None
---

# min_max:min max over time

**Version: 0.0.0**

## Description


For each time or frequency step of the input fields container, computes the per-component minimum and maximum across all entities of the field at that step.

Results exposed by component, collapsed by time, shell layers (when available).

The result is grouped by all labels of the input fields container except `time`.
For every remaining label combination, the output minimum (pin 0) and maximum (pin 1) each contain one field whose entity ids are the time or frequency step ids and whose values are the per-component minima and maxima at that step.

If the input does not contain the `time` label, the input fields container is forwarded unchanged.

**When to use:** you want to keep the time or frequency axis but reduce across entities, giving one per-component min/max value per step.
Example: peak displacement across the mesh at every time step of a transient analysis.
Use `min_max_over_time_by_entity` for the dual reduction (keep entities, collapse time), or `min_max_fc_inc` for the incremental variant.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [compute_absolute_value](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container aggregated per time or frequency step. Must expose the `time` label to trigger the aggregation; otherwise the input is forwarded unchanged.

<a id="input_2"></a>
### compute_absolute_value (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

When set to `true`, absolute values of the field entries are used before the min and max are computed. Default: `false`.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [min](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [max](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### min (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Per-component minima grouped by all input labels except `time`. Within each output field, entity ids are the time or frequency step ids.

<a id="output_1"></a>
### max (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Per-component maxima grouped by all input labels except `time`. Within each output field, entity ids are the time or frequency step ids.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [incremental](../../core-concepts/operator-configurations.md#incremental)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range.

### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: min_max

 **Plugin**: core

 **Scripting name**: min_max_by_time

 **Full name**: min_max.min_max_by_time

 **Internal name**: min_max_by_time

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_by_time"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(2, my_compute_absolute_value);
ansys::dpf::FieldsContainer my_min = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_max = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_by_time() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.compute_absolute_value.connect(my_compute_absolute_value)
my_min = op.outputs.min()
my_max = op.outputs.max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.min_max_by_time() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.compute_absolute_value.Connect(my_compute_absolute_value)
my_min = op.outputs.min.GetData()
my_max = op.outputs.max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.