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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rom_matrices |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the reduced matrices |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | data describing the finite element model |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../core-concepts/dpf-types.md#field) | coordinates of all nodes |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 6</strong>|  phi_ortho |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Orthonormalizated modes transformation |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 1**| mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
|  **Pin 2**| lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
|  **Pin 3**| field_coordinates_and_euler_angles |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | coordinates and euler angles of all nodes |
|  **Pin 4**| nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 5**| used_node_index |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 6**| eigenvalue |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 7**| translational_mode_shape |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 8**| rotational_mode_shape |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 9**| invrt_1 |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 10**| invrt_2 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 11**| invrt_3 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 12**| invrt_4 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 13**| invrt_5 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 14**| invrt_6 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 15**| invrt_7 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 16**| invrt_8 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_motion

 **Full name**: result.compute_invariant_terms_motion

 **Internal name**: compute_invariant_terms_motion

 **License**: None

## Examples

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