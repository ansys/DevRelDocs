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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_of_mass |[`field`](../../core-concepts/dpf-types.md#field) | center of mass of the body |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  inertia_relief |[`field`](../../core-concepts/dpf-types.md#field) | inertia matrix |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_size |[`double`](../../core-concepts/dpf-types.md#standard-types) | size of the diagonal box containing the body |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  master_node_coordinates |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  v_trsf |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | translational and rotational shape functions |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  k_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mass_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  c_mat |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rhs |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dr_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  drn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dn_cross_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 14</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnx_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 15</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dny_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnz_y |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 17</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyx_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 18</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyy_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 19</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dyz_n |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 20</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnxn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 21</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnyn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 22</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dnzn |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 23</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | path with cms_rbd extension where the export occurs |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data Source containing the cms_rbd file generated. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: write_cms_rbd_file

 **Full name**: result.write_cms_rbd_file

 **Internal name**: write_cms_rbd_file

 **License**: None

## Examples

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