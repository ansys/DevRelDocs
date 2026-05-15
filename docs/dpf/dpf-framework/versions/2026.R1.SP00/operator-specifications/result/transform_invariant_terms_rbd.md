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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [rotation_matrix](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [coordinate_system](#input_1) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [model_data](#input_2) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [center_of_mass](#input_3) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [inertia_relief](#input_4) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [model_size](#input_5) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [master_node_coordinates](#input_6) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [v_trsf](#input_7) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [k_mat](#input_8) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>9</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mass_mat](#input_9) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>10</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [c_mat](#input_10) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>11</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [rhs](#input_11) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>12</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dn](#input_12) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>13</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dr_cross_n](#input_13) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>14</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [drn](#input_14) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>15</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dn_cross_n](#input_15) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>16</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dnx_y](#input_16) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>17</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dny_y](#input_17) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>18</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dnz_y](#input_18) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>19</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dyx_n](#input_19) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>20</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dyy_n](#input_20) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>21</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dyz_n](#input_21) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>22</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dnxn](#input_22) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>23</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dnyn](#input_23) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>24</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dnzn](#input_24) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### rotation_matrix (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

3-3 rotation matrix.

<a id="input_1"></a>
### coordinate_system (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

origin of the new coordinate system.

<a id="input_2"></a>
### model_data (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

data describing the finite element model

<a id="input_3"></a>
### center_of_mass (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

center of mass of the body

<a id="input_4"></a>
### inertia_relief (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

inertia matrix

<a id="input_5"></a>
### model_size (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

size of the diagonal box containing the body

<a id="input_6"></a>
### master_node_coordinates (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_7"></a>
### v_trsf (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

translational and rotational shape functions

<a id="input_8"></a>
### k_mat (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_9"></a>
### mass_mat (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_10"></a>
### c_mat (Pin 10)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_11"></a>
### rhs (Pin 11)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_12"></a>
### dn (Pin 12)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_13"></a>
### dr_cross_n (Pin 13)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_14"></a>
### drn (Pin 14)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_15"></a>
### dn_cross_n (Pin 15)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_16"></a>
### dnx_y (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_17"></a>
### dny_y (Pin 17)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_18"></a>
### dnz_y (Pin 18)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_19"></a>
### dyx_n (Pin 19)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_20"></a>
### dyy_n (Pin 20)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_21"></a>
### dyz_n (Pin 21)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_22"></a>
### dnxn (Pin 22)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_23"></a>
### dnyn (Pin 23)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_24"></a>
### dnzn (Pin 24)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [model_data](#output_0) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
|  **1**| [center_of_mass](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [inertia_relief](#output_2) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **3**| [model_size](#output_3) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
|  **4**| [master_node_coordinates](#output_4) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **5**| [v_trsf](#output_5) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **6**| [k_mat](#output_6) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **7**| [mass_mat](#output_7) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **8**| [c_mat](#output_8) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **9**| [rhs](#output_9) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **10**| [dn](#output_10) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **11**| [dr_cross_n](#output_11) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **12**| [drn](#output_12) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **13**| [dn_cross_n](#output_13) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **14**| [dnx_y](#output_14) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **15**| [dny_y](#output_15) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **16**| [dnz_y](#output_16) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **17**| [dyx_n](#output_17) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **18**| [dyy_n](#output_18) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **19**| [dyz_n](#output_19) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **20**| [dnxn](#output_20) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **21**| [dnyn](#output_21) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
|  **22**| [dnzn](#output_22) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### model_data (Pin 0)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

data describing the finite element model

<a id="output_1"></a>
### center_of_mass (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

center of mass of the body

<a id="output_2"></a>
### inertia_relief (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

inertia matrix

<a id="output_3"></a>
### model_size (Pin 3)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)



<a id="output_4"></a>
### master_node_coordinates (Pin 4)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_5"></a>
### v_trsf (Pin 5)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

translational and rotational shape functions

<a id="output_6"></a>
### k_mat (Pin 6)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_7"></a>
### mass_mat (Pin 7)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_8"></a>
### c_mat (Pin 8)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_9"></a>
### rhs (Pin 9)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_10"></a>
### dn (Pin 10)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_11"></a>
### dr_cross_n (Pin 11)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_12"></a>
### drn (Pin 12)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_13"></a>
### dn_cross_n (Pin 13)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_14"></a>
### dnx_y (Pin 14)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_15"></a>
### dny_y (Pin 15)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_16"></a>
### dnz_y (Pin 16)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_17"></a>
### dyx_n (Pin 17)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_18"></a>
### dyy_n (Pin 18)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_19"></a>
### dyz_n (Pin 19)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_20"></a>
### dnxn (Pin 20)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_21"></a>
### dnyn (Pin 21)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="output_22"></a>
### dnzn (Pin 22)

- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### inplace

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

The output is written over the input to save memory if this config is set to true.

### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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