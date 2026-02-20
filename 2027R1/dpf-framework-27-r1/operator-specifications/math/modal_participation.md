---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:modal participation

**Version: 0.0.0**

## Description

Compute the modal participation factor for a given vector field V, defined as  sum_i ( V .dot. mode_shape_i * ponderation ).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [v_real](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [v_imag](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> | [mode_shapes](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [ponderation](#input_3) |  |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>4</strong> | [force_label_space](#input_4) |  |[`label_space`](../../core-concepts/dpf-types.md#label-space) |


<a id="input_0"></a>
### v_real (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

real part of field V

<a id="input_1"></a>
### v_imag (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

imag part of field V

<a id="input_2"></a>
### mode_shapes (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_3"></a>
### ponderation (Pin 3)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_4"></a>
### force_label_space (Pin 4)

- **Required:** No
- **Expected type(s):** [`label_space`](../../core-concepts/dpf-types.md#label-space)

If set, will force a label space for output result.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [output](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### output (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: math

 **Plugin**: core

 **Scripting name**: modal_participation

 **Full name**: math.modal_participation

 **Internal name**: harmonic::modal_participation

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("harmonic::modal_participation"); // operator instantiation
op.connect(0, my_v_real);
op.connect(1, my_v_imag);
op.connect(2, my_mode_shapes);
op.connect(3, my_ponderation);
op.connect(4, my_force_label_space);
ansys::dpf::FieldsContainer my_output = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.modal_participation() # operator instantiation
op.inputs.v_real.connect(my_v_real)
op.inputs.v_imag.connect(my_v_imag)
op.inputs.mode_shapes.connect(my_mode_shapes)
op.inputs.ponderation.connect(my_ponderation)
op.inputs.force_label_space.connect(my_force_label_space)
my_output = op.outputs.output()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.modal_participation() # operator instantiation
op.inputs.v_real.Connect(my_v_real)
op.inputs.v_imag.Connect(my_v_imag)
op.inputs.mode_shapes.Connect(my_mode_shapes)
op.inputs.ponderation.Connect(my_ponderation)
op.inputs.force_label_space.Connect(my_force_label_space)
my_output = op.outputs.output.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.