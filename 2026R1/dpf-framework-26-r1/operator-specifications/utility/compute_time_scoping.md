---
category: utility
plugin: core
license: None
---

# utility:compute time scoping

**Version: 0.0.0**

## Description

Computes the time frequency scoping (made of set IDs) necessary to interpolate on a list of time or frequencies.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_values |[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps". |
| <strong>Pin 2</strong>|  step |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 4</strong>|  interpolation_type |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 1:ramped' or 2:stepped', default is ramped |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | time_scoping |
|  **Pin 1**| field |[`field`](../../core-concepts/dpf-types.md#field) | time_freq_values |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: compute_time_scoping

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_time_scoping"); // operator instantiation
op.connect(0, my_time_freq_values);
op.connect(2, my_step);
op.connect(4, my_interpolation_type);
op.connect(8, my_time_freq_support);
ansys::dpf::Scoping my_scoping = op.getOutput<ansys::dpf::Scoping>(0);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.time_freq_values.connect(my_time_freq_values)
op.inputs.step.connect(my_step)
op.inputs.interpolation_type.connect(my_interpolation_type)
op.inputs.time_freq_support.connect(my_time_freq_support)
my_scoping = op.outputs.scoping()
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.time_freq_values.Connect(my_time_freq_values)
op.inputs.step.Connect(my_step)
op.inputs.interpolation_type.Connect(my_interpolation_type)
op.inputs.time_freq_support.Connect(my_time_freq_support)
my_scoping = op.outputs.scoping.GetData()
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.