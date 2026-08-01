---
category: min_max
plugin: core
license: None
---

# min_max:min max by entity over time

**Version: 0.0.0**

## Description


For each entity, each component and each shell layer (when available), computes the minimum and maximum across all time or frequency steps of the input fields container.

Elemental-nodal values are folded into the per-entity reduction; shell-layer values are preserved when the input exposes them.

The input `compute_amplitude` pin has effect only when the input fields container carries the `complex` label: when `true`, the amplitude of the complex values is used before the extremum is computed.

When the input has a time-frequency support, output pins 2 and 3 return fields containers holding the time or frequency value at which each per-entity, per-component minimum and maximum occurred.

When `compute_absolute_value` is `true`, extrema are computed on the absolute values of the field entries.

**When to use:** you want to keep the entity axis but reduce across time or frequency, giving one per-component min/max per entity across the whole history.
Example: peak stress ever reached at each node over an entire transient analysis, along with the time at which each peak occurred (pins 2 and 3).
Use `min_max_by_time` for the dual reduction (keep time, collapse entities), or `min_max_by_entity` when the fields are not indexed by time.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [compute_absolute_value](#input_3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [compute_amplitude](#input_4) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container aggregated per entity across all time or frequency steps. Must expose the `time` label; otherwise the input is forwarded unchanged.

<a id="input_3"></a>
### compute_absolute_value (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

When `true`, absolute values of the field entries are used before the min and max are computed. Default: `false`.

<a id="input_4"></a>
### compute_amplitude (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

When `true` and the input fields container has the `complex` label, the amplitude of the complex values is used before the extremum is computed. Ignored otherwise. Default: `false`.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [min](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [max](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [time_freq_of_min](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **3**| [time_freq_of_max](#output_3) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### min (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Per-entity, per-component minima aggregated across all time or frequency steps. Grouped by all input labels except `time` (and `complex` when `compute_amplitude` is active).

<a id="output_1"></a>
### max (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Per-entity, per-component maxima aggregated across all time or frequency steps. Grouped by all input labels except `time` (and `complex` when `compute_amplitude` is active).

<a id="output_2"></a>
### time_freq_of_min (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

For each entry of the output minimum, the time or frequency value at which it occurred. Populated only when the input carries a time-frequency support.

<a id="output_3"></a>
### time_freq_of_max (Pin 3)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

For each entry of the output maximum, the time or frequency value at which it occurred. Populated only when the input carries a time-frequency support.


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

 **Scripting name**: min_max_over_time_by_entity

 **Full name**: min_max.min_max_over_time_by_entity

 **Internal name**: min_max_over_time_by_entity

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_over_time_by_entity"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(3, my_compute_absolute_value);
op.connect(4, my_compute_amplitude);
ansys::dpf::FieldsContainer my_min = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_max = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_time_freq_of_min = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_time_freq_of_max = op.getOutput<ansys::dpf::FieldsContainer>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_over_time_by_entity() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.compute_absolute_value.connect(my_compute_absolute_value)
op.inputs.compute_amplitude.connect(my_compute_amplitude)
my_min = op.outputs.min()
my_max = op.outputs.max()
my_time_freq_of_min = op.outputs.time_freq_of_min()
my_time_freq_of_max = op.outputs.time_freq_of_max()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.min_max.min_max_over_time_by_entity() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.compute_absolute_value.Connect(my_compute_absolute_value)
op.inputs.compute_amplitude.Connect(my_compute_amplitude)
my_min = op.outputs.min.GetData()
my_max = op.outputs.max.GetData()
my_time_freq_of_min = op.outputs.time_freq_of_min.GetData()
my_time_freq_of_max = op.outputs.time_freq_of_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.