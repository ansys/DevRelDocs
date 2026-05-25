---
category: result
plugin: core
license: None
---

# result:write cms rbd file

**Version: 0.0.0**

## Description

Write the invariant terms and the model data in a cms_rbd file

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [model_data](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`property_field`](../../core-concepts/dpf-types.md#property-field) |
| <strong>1</strong> | [center_of_mass](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> | [inertia_relief](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong> | [model_size](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>4</strong> | [master_node_coordinates](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong> | [v_trsf](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> | [k_mat](#input_6) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>7</strong> | [mass_mat](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>8</strong> | [c_mat](#input_8) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>9</strong> | [rhs](#input_9) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>10</strong> | [dn](#input_10) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>11</strong> | [dr_cross_n](#input_11) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>12</strong> | [drn](#input_12) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>13</strong> | [dn_cross_n](#input_13) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>14</strong> | [dnx_y](#input_14) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>15</strong> | [dny_y](#input_15) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>16</strong> | [dnz_y](#input_16) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>17</strong> | [dyx_n](#input_17) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>18</strong> | [dyy_n](#input_18) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>19</strong> | [dyz_n](#input_19) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>20</strong> | [dnxn](#input_20) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>21</strong> | [dnyn](#input_21) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>22</strong> | [dnzn](#input_22) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>23</strong> | [file_path](#input_23) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### model_data (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

data describing the finite element model

<a id="input_1"></a>
### center_of_mass (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

center of mass of the body

<a id="input_2"></a>
### inertia_relief (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

inertia matrix

<a id="input_3"></a>
### model_size (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

size of the diagonal box containing the body

<a id="input_4"></a>
### master_node_coordinates (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_5"></a>
### v_trsf (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)

translational and rotational shape functions

<a id="input_6"></a>
### k_mat (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_7"></a>
### mass_mat (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_8"></a>
### c_mat (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_9"></a>
### rhs (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_10"></a>
### dn (Pin 10)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_11"></a>
### dr_cross_n (Pin 11)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_12"></a>
### drn (Pin 12)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_13"></a>
### dn_cross_n (Pin 13)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_14"></a>
### dnx_y (Pin 14)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_15"></a>
### dny_y (Pin 15)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_16"></a>
### dnz_y (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_17"></a>
### dyx_n (Pin 17)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_18"></a>
### dyy_n (Pin 18)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_19"></a>
### dyz_n (Pin 19)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_20"></a>
### dnxn (Pin 20)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_21"></a>
### dnyn (Pin 21)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_22"></a>
### dnzn (Pin 22)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_23"></a>
### file_path (Pin 23)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

path with cms_rbd extension where the export occurs


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [data_sources](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_0"></a>
### data_sources (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data Source containing the cms_rbd file generated.


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

 **Scripting name**: write_cms_rbd_file

 **Full name**: result.write_cms_rbd_file

 **Internal name**: write_cms_rbd_file

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("write_cms_rbd_file"); // operator instantiation
op.connect(0, my_model_data);
op.connect(1, my_center_of_mass);
op.connect(2, my_inertia_relief);
op.connect(3, my_model_size);
op.connect(4, my_master_node_coordinates);
op.connect(5, my_v_trsf);
op.connect(6, my_k_mat);
op.connect(7, my_mass_mat);
op.connect(8, my_c_mat);
op.connect(9, my_rhs);
op.connect(10, my_dn);
op.connect(11, my_dr_cross_n);
op.connect(12, my_drn);
op.connect(13, my_dn_cross_n);
op.connect(14, my_dnx_y);
op.connect(15, my_dny_y);
op.connect(16, my_dnz_y);
op.connect(17, my_dyx_n);
op.connect(18, my_dyy_n);
op.connect(19, my_dyz_n);
op.connect(20, my_dnxn);
op.connect(21, my_dnyn);
op.connect(22, my_dnzn);
op.connect(23, my_file_path);
ansys::dpf::DataSources my_data_sources = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.write_cms_rbd_file() # operator instantiation
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
op.inputs.file_path.connect(my_file_path)
my_data_sources = op.outputs.data_sources()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.write_cms_rbd_file() # operator instantiation
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
op.inputs.file_path.Connect(my_file_path)
my_data_sources = op.outputs.data_sources.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.