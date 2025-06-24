---
category: math
plugin: core
license: None
---

# math:fft filtering and cubic fitting

## Description

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.



## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping) | A time scoping to rescope / split the fields container given as input. |
| <strong>Pin 1</strong>|  mesh_scoping |[`umap<int32,int32>`](../../getting-started/using-data-containers.md#umap<int32,int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  entity_to_fit |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Data changing in time to be fitted. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  component_number |[`int32`](../../getting-started/using-data-containers.md#int32) | Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  first_derivative |[`bool`](../../getting-started/using-data-containers.md#bool) | Calculate the first derivative (bool). The default is false. |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  second_derivative |[`bool`](../../getting-started/using-data-containers.md#bool) | Calculate the second derivative (bool). The default is false. |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fit_data |[`bool`](../../getting-started/using-data-containers.md#bool) | Calculate the fitted values (bool). The default is false |
| <strong>Pin 7</strong>|  cutoff_fr |[`double`](../../getting-started/using-data-containers.md#double), [`int32`](../../getting-started/using-data-containers.md#int32) | Cutoff frequency. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fitted_entity_y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data. |
|  **Pin 1**| first_der_dy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | The first derivative (dY) from the fitted Y. |
|  **Pin 2**| second_der_d2y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | The second derivative (d2Y) from the fitted Y. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_approx

 **Full name**: math.fft_approx

 **Internal name**: fft_approx

 **License**: None
