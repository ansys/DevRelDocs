---
category: result
plugin: core
license: None
---

# result:read cms_rbd file

**Version: 0.0.0**

## Description

Read the invariant terms and the model data from a cms_rbd file

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [in_cms_rbd_file_path](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### in_cms_rbd_file_path (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

file name with cms_rbd extension where to read the input cms_rbd file.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

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

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: core

 **Scripting name**: read_cms_rbd_file

 **Full name**: result.read_cms_rbd_file

 **Internal name**: read_cms_rbd_file

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("read_cms_rbd_file"); // operator instantiation
op.connect(0, my_in_cms_rbd_file_path);
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

op = dpf.operators.result.read_cms_rbd_file() # operator instantiation
op.inputs.in_cms_rbd_file_path.connect(my_in_cms_rbd_file_path)
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

op = dpf.operators.result.read_cms_rbd_file() # operator instantiation
op.inputs.in_cms_rbd_file_path.Connect(my_in_cms_rbd_file_path)
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