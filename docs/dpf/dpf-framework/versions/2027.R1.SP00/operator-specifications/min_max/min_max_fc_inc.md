---
category: min_max
plugin: core
license: any_dpf_supported_increments
---

# min_max:incremental over fields container

**Version: 0.0.0**

## Description


Incremental variant that computes, for each time or frequency step of the input fields container, the per-component minimum and maximum across all successive calls of the operator.

At each call, results are merged with the previously-cached extrema.
The output minimum (pin 0) and maximum (pin 1) are fields with one entity per time or frequency step of the input.

**When to use:** the full set of fields does not fit in memory and results must be aggregated over successive server calls, one fields container at a time.
Example: peak of each stress component per time step accumulated over a long transient analysis processed one chunk of time steps at a time.
Use `min_max_by_time` for the non-incremental variant, or `min_max_inc` when input arrives one field at a time instead of one fields container at a time.


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

Fields container for the current increment. Must expose a time-frequency support so that output entries can be indexed by time or frequency step.


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

Field of per-step, per-component minima aggregated across all calls of the operator so far.

<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field of per-step, per-component maxima aggregated across all calls of the operator so far.


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

 **Scripting name**: min_max_fc_inc

 **Full name**: min_max.min_max_fc_inc

 **Internal name**: min_max_fc_inc

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("min_max_fc_inc"); // operator instantiation
op.connect(0, my_fields_container);
ansys::dpf::Field my_field_min = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_field_max = op.getOutput<ansys::dpf::Field>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.min_max.min_max_fc_inc() # operator instantiation
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

op = dpf.operators.min_max.min_max_fc_inc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.