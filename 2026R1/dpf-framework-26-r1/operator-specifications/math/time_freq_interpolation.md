---
category: math
plugin: core
license: None
---

# math:time freq interpolation

**Version: 0.0.0**

## Description

Interpolates between all the matching fields of a fields container at given times or frequencies, using ramped: fieldOut = field1*(1.-fact)+field2*(fact), or stepped: fieldOut=field2. If the time freq is higher than the max available, the field at the max time freq is taken. Computes the output time freq support to support the fields container

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_values |[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) | list of frequencies or times needed. To specify load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". |
| <strong>Pin 2</strong>|  step |[`int32`](../../core-concepts/dpf-types.md#standard-types) | if a Field is set as input, the step ids should be its scoping. |
| <strong>Pin 3</strong>|  interpolation_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 1 is ramped, 2 is stepped, default is 1. |
| <strong>Pin 4</strong>|  force_new_time_freq_support |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If set to true, the output fields container will always have a new time freq support rescoped to the output time_freq_values (default is false). If set to false, the time freq support is only recreated when time or frequency values are between existing ones. |
| <strong>Pin 8</strong>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainer with interpolated fields at specified time/frequency values |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: time_freq_interpolation

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("time_freq_interpolation"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_time_freq_values);
op.connect(2, my_step);
op.connect(3, my_interpolation_type);
op.connect(4, my_force_new_time_freq_support);
op.connect(8, my_time_freq_support);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.time_freq_values.connect(my_time_freq_values)
op.inputs.step.connect(my_step)
op.inputs.interpolation_type.connect(my_interpolation_type)
op.inputs.force_new_time_freq_support.connect(my_force_new_time_freq_support)
op.inputs.time_freq_support.connect(my_time_freq_support)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.time_freq_values.Connect(my_time_freq_values)
op.inputs.step.Connect(my_step)
op.inputs.interpolation_type.Connect(my_interpolation_type)
op.inputs.force_new_time_freq_support.Connect(my_force_new_time_freq_support)
op.inputs.time_freq_support.Connect(my_time_freq_support)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.