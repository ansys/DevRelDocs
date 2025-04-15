# math:fft multi harmonic solution minmax

## Description

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | rpm_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | rpm scoping, by default the fourier series sum is evaluated using all the rpms |
| **Pin 2** | fs_ratio |[`int32`](../getting-started/using-data-containers.md#int32) | No | field or fields container with only one field is expected |
| **Pin 3** | num_subdivisions |[`int32`](../getting-started/using-data-containers.md#int32) | No | connect number subdivisions, used for uniform discretization |
| **Pin 4** | max_num_subdivisions |[`int32`](../getting-started/using-data-containers.md#int32) | No | connect max number subdivisions, used to avoid huge number of sudivisions |
| **Pin 5** | num_cycles |[`int32`](../getting-started/using-data-containers.md#int32) | No | Number of cycle of the periodic signal (default is 2) |
| **Pin 6** | use_harmonic_zero |[`bool`](../getting-started/using-data-containers.md#bool) | No | use harmonic zero for first rpm (default is false) |
| **Pin 7** | calculate_time_series |[`bool`](../getting-started/using-data-containers.md#bool) | No | calculates time series output (output pin 2), setting it to false enhance performance if only min/max are required (default is true) |
| **Pin 8** | substeps_selector |[`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | No | substeps to evaluate (frequencies), by default the operator is evaluated using all the available steps |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_min |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | field_max |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | all_fields |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | fft_multi_harmonic_minmax | math.fft_multi_harmonic_minmax | fft_multi_harmonic_minmax | any_dpf_supported_increments |
