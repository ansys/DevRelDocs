---
category: result
plugin: core
license: None
---

# result:compute invariant terms rbd

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
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | inertia matrix |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | model size |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../core-concepts/dpf-types.md#field) | coordinates of all nodes |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 9</strong>|  constraint_mode_check |[`bool`](../../core-concepts/dpf-types.md#standard-types) | if true, the orthogonality of the constraint modes are checked. Default is false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
|  **Pin 1**| center_of_mass |[`field`](../../core-concepts/dpf-types.md#field) | center of mass of the body |
|  **Pin 2**| inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
|  **Pin 3**| model_size |[`property_field`](../../core-concepts/dpf-types.md#property-field) |  |
|  **Pin 4**| master_node_coordinates |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 5**| v_trsf |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | translational and rotational shape functions |
|  **Pin 6**| k_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 7**| mass_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 8**| c_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 9**| rhs |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 10**| dn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 11**| dr_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 12**| drn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 13**| dn_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 14**| dnx_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 15**| dny_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 16**| dnz_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 17**| dyx_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 18**| dyy_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 19**| dyz_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 20**| dnxn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 21**| dnyn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 22**| dnzn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: compute_invariant_terms_rbd

 **Full name**: result.compute_invariant_terms_rbd

 **Internal name**: compute_invariant_terms_rbd

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compute_invariant_terms_rbd"); // operator instantiation
op.connect(0, my_rom_matrices);
op.connect(1, my_mode_shapes);
op.connect(2, my_lumped_mass);
op.connect(3, my_model_data);
op.connect(4, my_center_of_mass);
op.connect(5, my_inertia_relief);
op.connect(6, my_model_size);
op.connect(7, my_field_coordinates);
op.connect(8, my_nod);
op.connect(9, my_constraint_mode_check);
ansys::dpf::PropertyField my_model_data = op.getOutput<ansys::dpf::PropertyField>(0);
ansys::dpf::Field my_center_of_mass = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_inertia_relief = op.getOutput<ansys::dpf::Field>(2);
ansys::dpf::PropertyField my_model_size = op.getOutput<ansys::dpf::PropertyField>(3);
std::vector<double> my_master_node_coordinates = op.getOutput<std::vector<double>>(4);
std::vector<double> my_v_trsf = op.getOutput<std::vector<double>>(5);
ansys::dpf::Field my_k_mat = op.getOutput<ansys::dpf::Field>(6);
ansys::dpf::Field my_mass_mat = op.getOutput<ansys::dpf::Field>(7);
ansys::dpf::Field my_c_mat = op.getOutput<ansys::dpf::Field>(8);
ansys::dpf::Field my_rhs = op.getOutput<ansys::dpf::Field>(9);
std::vector<double> my_dn = op.getOutput<std::vector<double>>(10);
std::vector<double> my_dr_cross_n = op.getOutput<std::vector<double>>(11);
std::vector<double> my_drn = op.getOutput<std::vector<double>>(12);
std::vector<double> my_dn_cross_n = op.getOutput<std::vector<double>>(13);
std::vector<double> my_dnx_y = op.getOutput<std::vector<double>>(14);
std::vector<double> my_dny_y = op.getOutput<std::vector<double>>(15);
std::vector<double> my_dnz_y = op.getOutput<std::vector<double>>(16);
std::vector<double> my_dyx_n = op.getOutput<std::vector<double>>(17);
std::vector<double> my_dyy_n = op.getOutput<std::vector<double>>(18);
std::vector<double> my_dyz_n = op.getOutput<std::vector<double>>(19);
std::vector<double> my_dnxn = op.getOutput<std::vector<double>>(20);
std::vector<double> my_dnyn = op.getOutput<std::vector<double>>(21);
std::vector<double> my_dnzn = op.getOutput<std::vector<double>>(22);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.compute_invariant_terms_rbd() # operator instantiation
op.inputs.rom_matrices.connect(my_rom_matrices)
op.inputs.mode_shapes.connect(my_mode_shapes)
op.inputs.lumped_mass.connect(my_lumped_mass)
op.inputs.model_data.connect(my_model_data)
op.inputs.center_of_mass.connect(my_center_of_mass)
op.inputs.inertia_relief.connect(my_inertia_relief)
op.inputs.model_size.connect(my_model_size)
op.inputs.field_coordinates.connect(my_field_coordinates)
op.inputs.nod.connect(my_nod)
op.inputs.constraint_mode_check.connect(my_constraint_mode_check)
my_model_data = op.outputs.model_data()
my_center_of_mass = op.outputs.center_of_mass()
my_inertia_relief = op.outputs.inertia_relief()
my_model_size = op.outputs.model_size()
my_master_node_coordinates = op.outputs.master_node_coordinates()
my_v_trsf = op.outputs.v_trsf()
my_k_mat = op.outputs.k_mat()
my_mass_mat = op.outputs.mass_mat()
my_c_mat = op.outputs.c_mat()
my_rhs = op.outputs.rhs()
my_dn = op.outputs.dn()
my_dr_cross_n = op.outputs.dr_cross_n()
my_drn = op.outputs.drn()
my_dn_cross_n = op.outputs.dn_cross_n()
my_dnx_y = op.outputs.dnx_y()
my_dny_y = op.outputs.dny_y()
my_dnz_y = op.outputs.dnz_y()
my_dyx_n = op.outputs.dyx_n()
my_dyy_n = op.outputs.dyy_n()
my_dyz_n = op.outputs.dyz_n()
my_dnxn = op.outputs.dnxn()
my_dnyn = op.outputs.dnyn()
my_dnzn = op.outputs.dnzn()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.compute_invariant_terms_rbd() # operator instantiation
op.inputs.rom_matrices.Connect(my_rom_matrices)
op.inputs.mode_shapes.Connect(my_mode_shapes)
op.inputs.lumped_mass.Connect(my_lumped_mass)
op.inputs.model_data.Connect(my_model_data)
op.inputs.center_of_mass.Connect(my_center_of_mass)
op.inputs.inertia_relief.Connect(my_inertia_relief)
op.inputs.model_size.Connect(my_model_size)
op.inputs.field_coordinates.Connect(my_field_coordinates)
op.inputs.nod.Connect(my_nod)
op.inputs.constraint_mode_check.Connect(my_constraint_mode_check)
my_model_data = op.outputs.model_data.GetData()
my_center_of_mass = op.outputs.center_of_mass.GetData()
my_inertia_relief = op.outputs.inertia_relief.GetData()
my_model_size = op.outputs.model_size.GetData()
my_master_node_coordinates = op.outputs.master_node_coordinates.GetData()
my_v_trsf = op.outputs.v_trsf.GetData()
my_k_mat = op.outputs.k_mat.GetData()
my_mass_mat = op.outputs.mass_mat.GetData()
my_c_mat = op.outputs.c_mat.GetData()
my_rhs = op.outputs.rhs.GetData()
my_dn = op.outputs.dn.GetData()
my_dr_cross_n = op.outputs.dr_cross_n.GetData()
my_drn = op.outputs.drn.GetData()
my_dn_cross_n = op.outputs.dn_cross_n.GetData()
my_dnx_y = op.outputs.dnx_y.GetData()
my_dny_y = op.outputs.dny_y.GetData()
my_dnz_y = op.outputs.dnz_y.GetData()
my_dyx_n = op.outputs.dyx_n.GetData()
my_dyy_n = op.outputs.dyy_n.GetData()
my_dyz_n = op.outputs.dyz_n.GetData()
my_dnxn = op.outputs.dnxn.GetData()
my_dnyn = op.outputs.dnyn.GetData()
my_dnzn = op.outputs.dnzn.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.