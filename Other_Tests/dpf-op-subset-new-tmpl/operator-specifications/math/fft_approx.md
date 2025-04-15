# math:fft filtering and cubic fitting

## Description

Computes the fitting curve using FFT filtering and cubic fitting in space (node i: x=time, y=data), with the possibility to compute the first and the second derivatives of the curve.


## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_scoping |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping) | No | A time scoping to rescope / split the fields container given as input. |
| **Pin 1** | mesh_scoping |[`umap<int32,int32>`](../../getting-started/using-data-containers.md#umap<int32,int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | No | A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input. |
| **Pin 2** | entity_to_fit |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | Data changing in time to be fitted. |
| **Pin 3** | component_number |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on. |
| **Pin 4** | first_derivative |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | Calculate the first derivative (bool). The default is false. |
| **Pin 5** | second_derivative |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | Calculate the second derivative (bool). The default is false. |
| **Pin 6** | fit_data |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | Calculate the fitted values (bool). The default is false |
| **Pin 7** | cutoff_fr |[`double`](../../getting-started/using-data-containers.md#double), [`int32`](../../getting-started/using-data-containers.md#int32) | No | Cutoff frequency. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fitted_entity_y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data. |
| **Pin 1** | first_der_dy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | The first derivative (dY) from the fitted Y. |
| **Pin 2** | second_der_d2y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | The second derivative (d2Y) from the fitted Y. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **Pin run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | fft_approx | math.fft_approx | fft_approx | None |
