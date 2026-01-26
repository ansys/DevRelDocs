---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft multi harmonic solution minmax

**Version: 0.0.0**

## Description

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_container](#input_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong>|  [rpm_scoping](#input_1) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong>|  [fs_ratio](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [num_subdivisions](#input_3) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong>|  [max_num_subdivisions](#input_4) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong>|  [num_cycles](#input_5) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong>|  [use_harmonic_zero](#input_6) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong>|  [calculate_time_series](#input_7) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong>|  [substeps_selector](#input_8) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### rpm_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

rpm scoping, by default the fourier series sum is evaluated using all the rpms

<a id="input_2"></a>
### fs_ratio (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

field or fields container with only one field is expected

<a id="input_3"></a>
### num_subdivisions (Pin 3)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

connect number subdivisions, used for uniform discretization

<a id="input_4"></a>
### max_num_subdivisions (Pin 4)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

connect max number subdivisions, used to avoid huge number of sudivisions

<a id="input_5"></a>
### num_cycles (Pin 5)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of cycle of the periodic signal (default is 2)

<a id="input_6"></a>
### use_harmonic_zero (Pin 6)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

use harmonic zero for first rpm (default is false)

<a id="input_7"></a>
### calculate_time_series (Pin 7)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

calculates time series output (output pin 2), setting it to false enhance performance if only min/max are required (default is true)

<a id="input_8"></a>
### substeps_selector (Pin 8)

- **Required:** No
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)

substeps to evaluate (frequencies), by default the operator is evaluated using all the available steps


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field_min](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [field_max](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [all_fields](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### field_min (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_1"></a>
### field_max (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_2"></a>
### all_fields (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_multi_harmonic_minmax

 **Full name**: math.fft_multi_harmonic_minmax

 **Internal name**: fft_multi_harmonic_minmax

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft_multi_harmonic_minmax"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_rpm_scoping);
op.connect(2, my_fs_ratio);
op.connect(3, my_num_subdivisions);
op.connect(4, my_max_num_subdivisions);
op.connect(5, my_num_cycles);
op.connect(6, my_use_harmonic_zero);
op.connect(7, my_calculate_time_series);
op.connect(8, my_substeps_selector);
ansys::dpf::FieldsContainer my_field_min = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_field_max = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_all_fields = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.fft_multi_harmonic_minmax() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.rpm_scoping.connect(my_rpm_scoping)
op.inputs.fs_ratio.connect(my_fs_ratio)
op.inputs.num_subdivisions.connect(my_num_subdivisions)
op.inputs.max_num_subdivisions.connect(my_max_num_subdivisions)
op.inputs.num_cycles.connect(my_num_cycles)
op.inputs.use_harmonic_zero.connect(my_use_harmonic_zero)
op.inputs.calculate_time_series.connect(my_calculate_time_series)
op.inputs.substeps_selector.connect(my_substeps_selector)
my_field_min = op.outputs.field_min()
my_field_max = op.outputs.field_max()
my_all_fields = op.outputs.all_fields()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.fft_multi_harmonic_minmax() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.rpm_scoping.Connect(my_rpm_scoping)
op.inputs.fs_ratio.Connect(my_fs_ratio)
op.inputs.num_subdivisions.Connect(my_num_subdivisions)
op.inputs.max_num_subdivisions.Connect(my_max_num_subdivisions)
op.inputs.num_cycles.Connect(my_num_cycles)
op.inputs.use_harmonic_zero.Connect(my_use_harmonic_zero)
op.inputs.calculate_time_series.Connect(my_calculate_time_series)
op.inputs.substeps_selector.Connect(my_substeps_selector)
my_field_min = op.outputs.field_min.GetData()
my_field_max = op.outputs.field_max.GetData()
my_all_fields = op.outputs.all_fields.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.