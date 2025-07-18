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


## Changelog

- Version 0.0.0: Initial release.