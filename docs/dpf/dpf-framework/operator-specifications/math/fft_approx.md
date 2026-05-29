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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [time_scoping](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  |[`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  |`umap<int32,int32>`, [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [entity_to_fit](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [component_number](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [first_derivative](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>5</strong> | [second_derivative](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>6</strong> | [fit_data](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>7</strong> | [cutoff_fr](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |  |[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### time_scoping (Pin 0)

- **Required:** No
- **Expected type(s):** [`vector&lt;int32&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

A time scoping to rescope / split the fields container given as input.

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** `umap<int32,int32>`, [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`scopings_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

A space (mesh entities) scoping (or scopings container) to rescope / split the fields container given as input.

<a id="input_2"></a>
### entity_to_fit (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Data changing in time to be fitted.

<a id="input_3"></a>
### component_number (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Component number as an integer, for example '0' for X-displacement, '1' for Y-displacement, and so on.

<a id="input_4"></a>
### first_derivative (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Calculate the first derivative (bool). The default is false.

<a id="input_5"></a>
### second_derivative (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Calculate the second derivative (bool). The default is false.

<a id="input_6"></a>
### fit_data (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Calculate the fitted values (bool). The default is false

<a id="input_7"></a>
### cutoff_fr (Pin 7)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Cutoff frequency.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fitted_entity_y](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [first_der_dy](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **2**| [second_der_d2y](/docs/dpf/dpf-framework/operator-specifications/math/fft_approx) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fitted_entity_y (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

The fitted entity is fitted using FFT along the space scoping (node i: x=time, y=data). Fitted Y is expected to be close to the input data.

<a id="output_1"></a>
### first_der_dy (Pin 1)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

The first derivative (dY) from the fitted Y.

<a id="output_2"></a>
### second_der_d2y (Pin 2)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

The second derivative (d2Y) from the fitted Y.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: fft_approx

 **Full name**: math.fft_approx

 **Internal name**: fft_approx

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.