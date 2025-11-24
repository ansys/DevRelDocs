---
category: result
plugin: core
license: None
---

# result:transform invariant terms rbd

**Version: 0.0.0**

## Description

Transform invariant terms rbd based on a coordinate system (translation + rotation).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rotation_matrix |[`field`](../../core-concepts/dpf-types.md#field) | 3-3 rotation matrix. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinate_system |[`field`](../../core-concepts/dpf-types.md#field) | origin of the new coordinate system. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`field`](../../core-concepts/dpf-types.md#field) | center of mass of the body |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | size of the diagonal box containing the body |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  master_node_coordinates |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  v_trsf |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | translational and rotational shape functions |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  k_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  c_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rhs |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dr_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 14</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  drn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 15</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnx_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 17</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dny_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 18</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnz_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 19</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyx_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 20</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyy_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyz_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 22</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnxn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnyn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 24</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnzn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |

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
| **inplace** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | The output is written over the input to save memory if this config is set to true. |
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: transform_invariant_terms_rbd

 **Full name**: result.transform_invariant_terms_rbd

 **Internal name**: transform_invariant_terms_rbd

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("transform_invariant_terms_rbd"); // operator instantiation
op.connect(0, my_rotation_matrix);
op.connect(1, my_coordinate_system);
op.connect(2, my_model_data);
op.connect(3, my_center_of_mass);
op.connect(4, my_inertia_relief);
op.connect(5, my_model_size);
op.connect(6, my_master_node_coordinates);
op.connect(7, my_v_trsf);
op.connect(8, my_k_mat);
op.connect(9, my_mass_mat);
op.connect(10, my_c_mat);
op.connect(11, my_rhs);
op.connect(12, my_dn);
op.connect(13, my_dr_cross_n);
op.connect(14, my_drn);
op.connect(15, my_dn_cross_n);
op.connect(16, my_dnx_y);
op.connect(17, my_dny_y);
op.connect(18, my_dnz_y);
op.connect(19, my_dyx_n);
op.connect(20, my_dyy_n);
op.connect(21, my_dyz_n);
op.connect(22, my_dnxn);
op.connect(23, my_dnyn);
op.connect(24, my_dnzn);
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

op = dpf.operators.result.transform_invariant_terms_rbd() # operator instantiation
op.inputs.rotation_matrix.connect(my_rotation_matrix)
op.inputs.coordinate_system.connect(my_coordinate_system)
op.inputs.model_data.connect(my_model_data)
op.inputs.center_of_mass.connect(my_center_of_mass)
op.inputs.inertia_relief.connect(my_inertia_relief)
op.inputs.model_size.connect(my_model_size)
op.inputs.master_node_coordinates.connect(my_master_node_coordinates)
op.inputs.v_trsf.connect(my_v_trsf)
op.inputs.k_mat.connect(my_k_mat)
op.inputs.mass_mat.connect(my_mass_mat)
op.inputs.c_mat.connect(my_c_mat)
op.inputs.rhs.connect(my_rhs)
op.inputs.dn.connect(my_dn)
op.inputs.dr_cross_n.connect(my_dr_cross_n)
op.inputs.drn.connect(my_drn)
op.inputs.dn_cross_n.connect(my_dn_cross_n)
op.inputs.dnx_y.connect(my_dnx_y)
op.inputs.dny_y.connect(my_dny_y)
op.inputs.dnz_y.connect(my_dnz_y)
op.inputs.dyx_n.connect(my_dyx_n)
op.inputs.dyy_n.connect(my_dyy_n)
op.inputs.dyz_n.connect(my_dyz_n)
op.inputs.dnxn.connect(my_dnxn)
op.inputs.dnyn.connect(my_dnyn)
op.inputs.dnzn.connect(my_dnzn)
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

op = dpf.operators.result.transform_invariant_terms_rbd() # operator instantiation
op.inputs.rotation_matrix.Connect(my_rotation_matrix)
op.inputs.coordinate_system.Connect(my_coordinate_system)
op.inputs.model_data.Connect(my_model_data)
op.inputs.center_of_mass.Connect(my_center_of_mass)
op.inputs.inertia_relief.Connect(my_inertia_relief)
op.inputs.model_size.Connect(my_model_size)
op.inputs.master_node_coordinates.Connect(my_master_node_coordinates)
op.inputs.v_trsf.Connect(my_v_trsf)
op.inputs.k_mat.Connect(my_k_mat)
op.inputs.mass_mat.Connect(my_mass_mat)
op.inputs.c_mat.Connect(my_c_mat)
op.inputs.rhs.Connect(my_rhs)
op.inputs.dn.Connect(my_dn)
op.inputs.dr_cross_n.Connect(my_dr_cross_n)
op.inputs.drn.Connect(my_drn)
op.inputs.dn_cross_n.Connect(my_dn_cross_n)
op.inputs.dnx_y.Connect(my_dnx_y)
op.inputs.dny_y.Connect(my_dny_y)
op.inputs.dnz_y.Connect(my_dnz_y)
op.inputs.dyx_n.Connect(my_dyx_n)
op.inputs.dyy_n.Connect(my_dyy_n)
op.inputs.dyz_n.Connect(my_dyz_n)
op.inputs.dnxn.Connect(my_dnxn)
op.inputs.dnyn.Connect(my_dnyn)
op.inputs.dnzn.Connect(my_dnzn)
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