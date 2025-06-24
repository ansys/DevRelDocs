---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:fft multi harmonic solution minmax

## Description

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong>|  rpm_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | rpm scoping, by default the fourier series sum is evaluated using all the rpms |
| <strong>Pin 2</strong>|  fs_ratio |[`int32`](../../getting-started/using-data-containers.md#int32) | field or fields container with only one field is expected |
| <strong>Pin 3</strong>|  num_subdivisions |[`int32`](../../getting-started/using-data-containers.md#int32) | connect number subdivisions, used for uniform discretization |
| <strong>Pin 4</strong>|  max_num_subdivisions |[`int32`](../../getting-started/using-data-containers.md#int32) | connect max number subdivisions, used to avoid huge number of sudivisions |
| <strong>Pin 5</strong>|  num_cycles |[`int32`](../../getting-started/using-data-containers.md#int32) | Number of cycle of the periodic signal (default is 2) |
| <strong>Pin 6</strong>|  use_harmonic_zero |[`bool`](../../getting-started/using-data-containers.md#bool) | use harmonic zero for first rpm (default is false) |
| <strong>Pin 7</strong>|  calculate_time_series |[`bool`](../../getting-started/using-data-containers.md#bool) | calculates time series output (output pin 2), setting it to false enhance performance if only min/max are required (default is true) |
| <strong>Pin 8</strong>|  substeps_selector |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | substeps to evaluate (frequencies), by default the operator is evaluated using all the available steps |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_min |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 1**| field_max |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |
|  **Pin 2**| all_fields |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_multi_harmonic_minmax

 **Full name**: math.fft_multi_harmonic_minmax

 **Internal name**: fft_multi_harmonic_minmax

 **License**: any_dpf_supported_increments
