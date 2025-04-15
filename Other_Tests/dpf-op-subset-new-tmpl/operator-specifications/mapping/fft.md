# mapping:fft

## Description

Computes the Fast Fourier Transform on each component of input Field or each field of input Fields Container (you can use transpose_fields_container to have relevant scoping). Fields are assumed with the same scoping, number of components and representing equally spaced data, ideally resampled to have a 2^n points (prepare_sampling_fft with time_freq_interpolation can help creating these fields). If Complex label is present, Complex to Complex FFT performed otherwise Real to Complex is performed (only half of the coefficient will be returned).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Field or Fields Container. |
| **Pin 3** | scale_forward_transform |[`double`](../../getting-started/using-data-containers.md#double) | No | Scale for Forward Transform, default is 2/field_num_elementary_data. |
| **Pin 4** | inplace |[`bool`](../../getting-started/using-data-containers.md#bool) | No | True if inplace, default is false. |
| **Pin 5** | force_fft_points |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Explicitely define number of fft points to either rescope or perform zero padding. |
| **Pin 6** | cutoff_frequency |[`double`](../../getting-started/using-data-containers.md#double) | No | Restrict output frequency up to this cutoff frequency |
| **Pin 7** | scale_right_amplitude |[`bool`](../../getting-started/using-data-containers.md#bool) | No | If set to true (default is false), 2/field_num_entities scaling will be applied, to have right amplitude values. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Output Complex Fields Container with labels matching input Fields Container. No supports binded, but prepare_sampling_fft provides it. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mapping** | core | fft | mapping.fft | fft | None |
