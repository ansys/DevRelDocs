---
category: mapping
plugin: core
license: None
---

# mapping:fft

## Description

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Field or Fields Container. |
| <strong>Pin 3</strong>|  scale_forward_transform |[`double`](../../getting-started/using-data-containers.md#double) | Scale for Forward Transform, default is 2/field_num_elementary_data. |
| <strong>Pin 4</strong>|  inplace |[`bool`](../../getting-started/using-data-containers.md#bool) | True if inplace, default is false. |
| <strong>Pin 5</strong>|  force_fft_points |[`int32`](../../getting-started/using-data-containers.md#int32) | Explicitely define number of fft points to either rescope or perform zero padding. |
| <strong>Pin 6</strong>|  cutoff_frequency |[`double`](../../getting-started/using-data-containers.md#double) | Restrict output frequency up to this cutoff frequency |
| <strong>Pin 7</strong>|  scale_right_amplitude |[`bool`](../../getting-started/using-data-containers.md#bool) | If set to true (default is false), 2/field_num_entities scaling will be applied, to have right amplitude values. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Output Complex Fields Container with labels matching input Fields Container. No supports binded, but prepare_sampling_fft provides it. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: mapping
- Plugin: core
- Scripting name: fft
- Full name: mapping.fft
- Internal name: fft
- License: None
  