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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong>|  rpm_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | rpm scoping, by default the fourier series sum is evaluated using all the rpms |
| <strong>Pin 2</strong>|  fs_ratio |[`int32`](../../core-concepts/dpf-types.md#standard-types) | field or fields container with only one field is expected |
| <strong>Pin 3</strong>|  num_subdivisions |[`int32`](../../core-concepts/dpf-types.md#standard-types) | connect number subdivisions, used for uniform discretization |
| <strong>Pin 4</strong>|  max_num_subdivisions |[`int32`](../../core-concepts/dpf-types.md#standard-types) | connect max number subdivisions, used to avoid huge number of sudivisions |
| <strong>Pin 5</strong>|  num_cycles |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of cycle of the periodic signal (default is 2) |
| <strong>Pin 6</strong>|  use_harmonic_zero |[`bool`](../../core-concepts/dpf-types.md#standard-types) | use harmonic zero for first rpm (default is false) |
| <strong>Pin 7</strong>|  calculate_time_series |[`bool`](../../core-concepts/dpf-types.md#standard-types) | calculates time series output (output pin 2), setting it to false enhance performance if only min/max are required (default is true) |
| <strong>Pin 8</strong>|  substeps_selector |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | substeps to evaluate (frequencies), by default the operator is evaluated using all the available steps |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_min |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| field_max |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 2**| all_fields |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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