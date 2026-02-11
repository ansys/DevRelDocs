---
category: result
plugin: core
license: None
---

# result:compute invariant terms motion

**Version: 0.0.0**

## Description

Set the required data for the invariant terms computation (reduced matrices, lumped mass matrix, modes ...)

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [rom_matrices](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [mode_shapes](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [lumped_mass](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [model_data](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>4</strong> | [field_coordinates](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>5</strong> | [nod](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [phi_ortho](#input_6) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### rom_matrices (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

FieldsContainers containing the reduced matrices

<a id="input_1"></a>
### mode_shapes (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

<a id="input_2"></a>
### lumped_mass (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

FieldsContainers containing the lumped mass

<a id="input_3"></a>
### model_data (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

data describing the finite element model

<a id="input_4"></a>
### field_coordinates (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

coordinates of all nodes

<a id="input_5"></a>
### nod (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_6"></a>
### phi_ortho (Pin 6)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Orthonormalizated modes transformation


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [model_data](#output_0) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
|  **1**| [mode_shapes](#output_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **2**| [lumped_mass](#output_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **3**| [field_coordinates_and_euler_angles](#output_3) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **4**| [nod](#output_4) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
|  **5**| [used_node_index](#output_5) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
|  **6**| [eigenvalue](#output_6) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **7**| [translational_mode_shape](#output_7) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **8**| [rotational_mode_shape](#output_8) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **9**| [invrt_1](#output_9) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
|  **10**| [invrt_2](#output_10) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **11**| [invrt_3](#output_11) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **12**| [invrt_4](#output_12) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **13**| [invrt_5](#output_13) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **14**| [invrt_6](#output_14) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **15**| [invrt_7](#output_15) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **16**| [invrt_8](#output_16) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### model_data (Pin 0)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

data describing the finite element model

<a id="output_1"></a>
### mode_shapes (Pin 1)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

FieldsContainers containing the mode shapes, which are CST and NOR for the cms method

<a id="output_2"></a>
### lumped_mass (Pin 2)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

FieldsContainers containing the lumped mass

<a id="output_3"></a>
### field_coordinates_and_euler_angles (Pin 3)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

coordinates and euler angles of all nodes

<a id="output_4"></a>
### nod (Pin 4)

- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_5"></a>
### used_node_index (Pin 5)

- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_6"></a>
### eigenvalue (Pin 6)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_7"></a>
### translational_mode_shape (Pin 7)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_8"></a>
### rotational_mode_shape (Pin 8)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_9"></a>
### invrt_1 (Pin 9)

- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_10"></a>
### invrt_2 (Pin 10)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_11"></a>
### invrt_3 (Pin 11)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_12"></a>
### invrt_4 (Pin 12)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_13"></a>
### invrt_5 (Pin 13)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_14"></a>
### invrt_6 (Pin 14)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_15"></a>
### invrt_7 (Pin 15)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_16"></a>
### invrt_8 (Pin 16)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_motion

 **Full name**: result.compute_invariant_terms_motion

 **Internal name**: compute_invariant_terms_motion

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_invariant_terms_motion"); // operator instantiation
op.connect(0, my_rom_matrices);
op.connect(1, my_mode_shapes);
op.connect(2, my_lumped_mass);
op.connect(3, my_model_data);
op.connect(4, my_field_coordinates);
op.connect(5, my_nod);
op.connect(6, my_phi_ortho);
ansys::dpf::PropertyField my_model_data = op.getOutput<ansys::dpf::PropertyField>(0);
ansys::dpf::FieldsContainer my_mode_shapes = op.getOutput<ansys::dpf::FieldsContainer>(1);
ansys::dpf::FieldsContainer my_lumped_mass = op.getOutput<ansys::dpf::FieldsContainer>(2);
ansys::dpf::FieldsContainer my_field_coordinates_and_euler_angles = op.getOutput<ansys::dpf::FieldsContainer>(3);
std::vector<int> my_nod = op.getOutput<std::vector<int>>(4);
std::vector<int> my_used_node_index = op.getOutput<std::vector<int>>(5);
std::vector<double> my_eigenvalue = op.getOutput<std::vector<double>>(6);
std::vector<double> my_translational_mode_shape = op.getOutput<std::vector<double>>(7);
std::vector<double> my_rotational_mode_shape = op.getOutput<std::vector<double>>(8);
double my_invrt_1 = op.getOutput<double>(9);
std::vector<double> my_invrt_2 = op.getOutput<std::vector<double>>(10);
std::vector<double> my_invrt_3 = op.getOutput<std::vector<double>>(11);
std::vector<double> my_invrt_4 = op.getOutput<std::vector<double>>(12);
std::vector<double> my_invrt_5 = op.getOutput<std::vector<double>>(13);
std::vector<double> my_invrt_6 = op.getOutput<std::vector<double>>(14);
std::vector<double> my_invrt_7 = op.getOutput<std::vector<double>>(15);
std::vector<double> my_invrt_8 = op.getOutput<std::vector<double>>(16);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.compute_invariant_terms_motion() # operator instantiation
op.inputs.rom_matrices.connect(my_rom_matrices)
op.inputs.mode_shapes.connect(my_mode_shapes)
op.inputs.lumped_mass.connect(my_lumped_mass)
op.inputs.model_data.connect(my_model_data)
op.inputs.field_coordinates.connect(my_field_coordinates)
op.inputs.nod.connect(my_nod)
op.inputs.phi_ortho.connect(my_phi_ortho)
my_model_data = op.outputs.model_data()
my_mode_shapes = op.outputs.mode_shapes()
my_lumped_mass = op.outputs.lumped_mass()
my_field_coordinates_and_euler_angles = op.outputs.field_coordinates_and_euler_angles()
my_nod = op.outputs.nod()
my_used_node_index = op.outputs.used_node_index()
my_eigenvalue = op.outputs.eigenvalue()
my_translational_mode_shape = op.outputs.translational_mode_shape()
my_rotational_mode_shape = op.outputs.rotational_mode_shape()
my_invrt_1 = op.outputs.invrt_1()
my_invrt_2 = op.outputs.invrt_2()
my_invrt_3 = op.outputs.invrt_3()
my_invrt_4 = op.outputs.invrt_4()
my_invrt_5 = op.outputs.invrt_5()
my_invrt_6 = op.outputs.invrt_6()
my_invrt_7 = op.outputs.invrt_7()
my_invrt_8 = op.outputs.invrt_8()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.compute_invariant_terms_motion() # operator instantiation
op.inputs.rom_matrices.Connect(my_rom_matrices)
op.inputs.mode_shapes.Connect(my_mode_shapes)
op.inputs.lumped_mass.Connect(my_lumped_mass)
op.inputs.model_data.Connect(my_model_data)
op.inputs.field_coordinates.Connect(my_field_coordinates)
op.inputs.nod.Connect(my_nod)
op.inputs.phi_ortho.Connect(my_phi_ortho)
my_model_data = op.outputs.model_data.GetData()
my_mode_shapes = op.outputs.mode_shapes.GetData()
my_lumped_mass = op.outputs.lumped_mass.GetData()
my_field_coordinates_and_euler_angles = op.outputs.field_coordinates_and_euler_angles.GetData()
my_nod = op.outputs.nod.GetData()
my_used_node_index = op.outputs.used_node_index.GetData()
my_eigenvalue = op.outputs.eigenvalue.GetData()
my_translational_mode_shape = op.outputs.translational_mode_shape.GetData()
my_rotational_mode_shape = op.outputs.rotational_mode_shape.GetData()
my_invrt_1 = op.outputs.invrt_1.GetData()
my_invrt_2 = op.outputs.invrt_2.GetData()
my_invrt_3 = op.outputs.invrt_3.GetData()
my_invrt_4 = op.outputs.invrt_4.GetData()
my_invrt_5 = op.outputs.invrt_5.GetData()
my_invrt_6 = op.outputs.invrt_6.GetData()
my_invrt_7 = op.outputs.invrt_7.GetData()
my_invrt_8 = op.outputs.invrt_8.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.