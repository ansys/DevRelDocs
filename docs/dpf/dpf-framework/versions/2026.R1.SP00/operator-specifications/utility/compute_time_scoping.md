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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [time_freq_values](#input_0) |[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |
| <strong>2</strong>|  [step](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong>|  [interpolation_type](#input_4) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [time_freq_support](#input_8) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |


<a id="input_0"></a>
### time_freq_values (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)

List of frequencies or times needed. To specify load steps, put a field (and not a list) in input with a scoping located on "TimeFreq_steps".

<a id="input_2"></a>
### step (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_4"></a>
### interpolation_type (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

1:ramped' or 2:stepped', default is ramped

<a id="input_8"></a>
### time_freq_support (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
|  **1**| [field](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

time_scoping

<a id="output_1"></a>
### field (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

time_freq_values


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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