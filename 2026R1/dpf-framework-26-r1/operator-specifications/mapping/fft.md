---
category: mapping
plugin: core
license: None
---

# mapping:fft

**Version: 0.0.0**

## Description

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Field or Fields Container. |
| <strong>Pin 3</strong>|  scale_forward_transform |[`double`](../../core-concepts/dpf-types.md#standard-types) | Scale for Forward Transform, default is 2/field_num_elementary_data. |
| <strong>Pin 4</strong>|  inplace |[`bool`](../../core-concepts/dpf-types.md#standard-types) | True if inplace, default is false. |
| <strong>Pin 5</strong>|  force_fft_points |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Explicitely define number of fft points to either rescope or perform zero padding. |
| <strong>Pin 6</strong>|  cutoff_frequency |[`double`](../../core-concepts/dpf-types.md#standard-types) | Restrict output frequency up to this cutoff frequency |
| <strong>Pin 7</strong>|  scale_right_amplitude |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If set to true (default is false), 2/field_num_entities scaling will be applied, to have right amplitude values. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Output Complex Fields Container with labels matching input Fields Container. No supports binded, but prepare_sampling_fft provides it. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: fft

 **Full name**: mapping.fft

 **Internal name**: fft

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft"); // operator instantiation
op.connect(0, my_field);
op.connect(3, my_scale_forward_transform);
op.connect(4, my_inplace);
op.connect(5, my_force_fft_points);
op.connect(6, my_cutoff_frequency);
op.connect(7, my_scale_right_amplitude);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.fft() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.scale_forward_transform.connect(my_scale_forward_transform)
op.inputs.inplace.connect(my_inplace)
op.inputs.force_fft_points.connect(my_force_fft_points)
op.inputs.cutoff_frequency.connect(my_cutoff_frequency)
op.inputs.scale_right_amplitude.connect(my_scale_right_amplitude)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.fft() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.scale_forward_transform.Connect(my_scale_forward_transform)
op.inputs.inplace.Connect(my_inplace)
op.inputs.force_fft_points.Connect(my_force_fft_points)
op.inputs.cutoff_frequency.Connect(my_cutoff_frequency)
op.inputs.scale_right_amplitude.Connect(my_scale_right_amplitude)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.