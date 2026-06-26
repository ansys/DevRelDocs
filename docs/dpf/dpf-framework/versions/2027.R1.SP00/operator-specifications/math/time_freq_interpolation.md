---
category: math
plugin: core
license: None
---

# math:time freq interpolation

**Version: 0.0.0**

## Description


Interpolates the fields in a fields container at the requested times or frequencies
using [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation).
Ramped interpolation ($p = 1$, default): $\mathrm{out}[i] = (1 - s) \cdot f_1[i] + s \cdot f_2[i]$
where $s = (t - t_1) / (t_2 - t_1)$.
Stepped interpolation ($p = 2$): $\mathrm{out}[i] = f_2[i]$.
If the requested value exceeds the available range, the field at the maximum available value is used.
A new time-frequency support aligned with the requested values is produced as a second output.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [time_freq_values](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> | [step](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [interpolation_type](#input_3) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [force_new_time_freq_support](#input_4) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong> | [time_freq_support](#input_8) |  |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### time_freq_values (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types), [`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field)

list of frequencies or times needed. To specify load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps".

<a id="input_2"></a>
### step (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

if a Field is set as input, the step ids should be its scoping.

<a id="input_3"></a>
### interpolation_type (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

1 is ramped, 2 is stepped, default is 1.

<a id="input_4"></a>
### force_new_time_freq_support (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If set to true, the output fields container will always have a new time freq support rescoped to the output time_freq_values (default is false). If set to false, the time freq support is only recreated when time or frequency values are between existing ones.

<a id="input_8"></a>
### time_freq_support (Pin 8)

- **Required:** No
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [time_freq_support](#output_1) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Fields container with one interpolated field set per requested time or frequency value.

<a id="output_1"></a>
### time_freq_support (Pin 1)

- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)

Time or frequency support aligned with the output fields container.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [permissive](../../core-concepts/operator-configurations.md#permissive)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: time_freq_interpolation

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
ansys::dpf::TimeFreqSupport my_time_freq_support = op.getOutput<ansys::dpf::TimeFreqSupport>(1);
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
my_time_freq_support = op.outputs.time_freq_support()
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
my_time_freq_support = op.outputs.time_freq_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.