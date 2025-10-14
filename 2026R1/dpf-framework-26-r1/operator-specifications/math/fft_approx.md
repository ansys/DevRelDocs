---
category: math
plugin: core
license: None
---

# math:fft filtering and cubic fitting

**Version: 0.0.0**

## Description

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types), [`scoping`](../../core-concepts/dpf-types.md#scoping) | A time scoping to rescope / split the fields container given as input. |
| <strong>Pin 1</strong>|  mesh_scoping |`umap<int32,int32>`, [`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  entity_to_fit |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Data changing in time to be fitted. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  component_number |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  first_derivative |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Calculate the first derivative (bool). The default is false. |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  second_derivative |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Calculate the second derivative (bool). The default is false. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fit_data |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Calculate the fitted values (bool). The default is false |
| <strong>Pin 7</strong>|  cutoff_fr |[`double`](../../core-concepts/dpf-types.md#standard-types), [`int32`](../../core-concepts/dpf-types.md#standard-types) | Cutoff frequency. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fitted_entity_y |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data. |
|  **Pin 1**| first_der_dy |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The first derivative (dY) from the fitted Y. |
|  **Pin 2**| second_der_d2y |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | The second derivative (d2Y) from the fitted Y. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_approx

 **Full name**: math.fft_approx

 **Internal name**: fft_approx

 **License**: None


## Changelog

- Version 0.0.0: Initial release.