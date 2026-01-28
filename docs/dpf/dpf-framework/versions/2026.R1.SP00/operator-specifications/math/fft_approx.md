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

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("fft_approx"); // operator instantiation
op.connect(0, my_time_scoping);
op.connect(1, my_mesh_scoping);
op.connect(2, my_entity_to_fit);
op.connect(3, my_component_number);
op.connect(4, my_first_derivative);
op.connect(5, my_second_derivative);
op.connect(6, my_fit_data);
op.connect(7, my_cutoff_fr);
ansys::dpf::FieldsContainer my_fitted_entity_y = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_first_der_dy = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_second_der_d2y = op.getOutput<ansys::dpf::FieldsContainer>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.fft_approx() # operator instantiation
op.inputs.time_scoping.connect(my_time_scoping)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.entity_to_fit.connect(my_entity_to_fit)
op.inputs.component_number.connect(my_component_number)
op.inputs.first_derivative.connect(my_first_derivative)
op.inputs.second_derivative.connect(my_second_derivative)
op.inputs.fit_data.connect(my_fit_data)
op.inputs.cutoff_fr.connect(my_cutoff_fr)
my_fitted_entity_y = op.outputs.fitted_entity_y()
my_first_der_dy = op.outputs.first_der_dy()
my_second_der_d2y = op.outputs.second_der_d2y()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.fft_approx() # operator instantiation
op.inputs.time_scoping.Connect(my_time_scoping)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.entity_to_fit.Connect(my_entity_to_fit)
op.inputs.component_number.Connect(my_component_number)
op.inputs.first_derivative.Connect(my_first_derivative)
op.inputs.second_derivative.Connect(my_second_derivative)
op.inputs.fit_data.Connect(my_fit_data)
op.inputs.cutoff_fr.Connect(my_cutoff_fr)
my_fitted_entity_y = op.outputs.fitted_entity_y.GetData()
my_first_der_dy = op.outputs.first_der_dy.GetData()
my_second_der_d2y = op.outputs.second_der_d2y.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.