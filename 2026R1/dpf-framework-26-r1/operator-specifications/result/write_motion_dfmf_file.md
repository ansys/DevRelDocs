---
category: result
plugin: core
license: None
---

# result:write motion dfmf file

**Version: 0.0.0**

## Description

Write the invariant terms and the model data in a motion dfmf file

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [model_data](#input_0) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [mode_shapes](#input_1) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [lumped_mass](#input_2) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field_coordinates](#input_3) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [nod](#input_4) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>5</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [used_node_index](#input_5) |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>6</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [eigenvalue](#input_6) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [translational_mode_shape](#input_7) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>8</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [rotational_mode_shape](#input_8) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>9</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_1](#input_9) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>10</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_2](#input_10) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>11</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_3](#input_11) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>12</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_4](#input_12) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>13</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_5](#input_13) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>14</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_6](#input_14) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>15</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_7](#input_15) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>16</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [invrt_8](#input_16) |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>17</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [dfmffile_path](#input_17) |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>18</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [rstfile_path](#input_18) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### model_data (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)

data describing the finite element model

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
### field_coordinates (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

coordinates of all nodes

<a id="input_4"></a>
### nod (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_5"></a>
### used_node_index (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`vector<int32>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_6"></a>
### eigenvalue (Pin 6)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_7"></a>
### translational_mode_shape (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_8"></a>
### rotational_mode_shape (Pin 8)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_9"></a>
### invrt_1 (Pin 9)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_10"></a>
### invrt_2 (Pin 10)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_11"></a>
### invrt_3 (Pin 11)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_12"></a>
### invrt_4 (Pin 12)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_13"></a>
### invrt_5 (Pin 13)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_14"></a>
### invrt_6 (Pin 14)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_15"></a>
### invrt_7 (Pin 15)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_16"></a>
### invrt_8 (Pin 16)

- **Required:** Yes
- **Expected type(s):** [`vector<double>`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_17"></a>
### dfmffile_path (Pin 17)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

path with motion dfmf extension where the export occurs

<a id="input_18"></a>
### rstfile_path (Pin 18)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [dfmf_data_source](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_0"></a>
### dfmf_data_source (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

Data Source containing the dfmf file generated.


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: write_motion_dfmf_file

 **Full name**: result.write_motion_dfmf_file

 **Internal name**: write_motion_dfmf_file

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("write_motion_dfmf_file"); // operator instantiation
op.connect(0, my_model_data);
op.connect(1, my_mode_shapes);
op.connect(2, my_lumped_mass);
op.connect(3, my_field_coordinates);
op.connect(4, my_nod);
op.connect(5, my_used_node_index);
op.connect(6, my_eigenvalue);
op.connect(7, my_translational_mode_shape);
op.connect(8, my_rotational_mode_shape);
op.connect(9, my_invrt_1);
op.connect(10, my_invrt_2);
op.connect(11, my_invrt_3);
op.connect(12, my_invrt_4);
op.connect(13, my_invrt_5);
op.connect(14, my_invrt_6);
op.connect(15, my_invrt_7);
op.connect(16, my_invrt_8);
op.connect(17, my_dfmffile_path);
op.connect(18, my_rstfile_path);
ansys::dpf::DataSources my_dfmf_data_source = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.write_motion_dfmf_file() # operator instantiation
op.inputs.model_data.connect(my_model_data)
op.inputs.mode_shapes.connect(my_mode_shapes)
op.inputs.lumped_mass.connect(my_lumped_mass)
op.inputs.field_coordinates.connect(my_field_coordinates)
op.inputs.nod.connect(my_nod)
op.inputs.used_node_index.connect(my_used_node_index)
op.inputs.eigenvalue.connect(my_eigenvalue)
op.inputs.translational_mode_shape.connect(my_translational_mode_shape)
op.inputs.rotational_mode_shape.connect(my_rotational_mode_shape)
op.inputs.invrt_1.connect(my_invrt_1)
op.inputs.invrt_2.connect(my_invrt_2)
op.inputs.invrt_3.connect(my_invrt_3)
op.inputs.invrt_4.connect(my_invrt_4)
op.inputs.invrt_5.connect(my_invrt_5)
op.inputs.invrt_6.connect(my_invrt_6)
op.inputs.invrt_7.connect(my_invrt_7)
op.inputs.invrt_8.connect(my_invrt_8)
op.inputs.dfmffile_path.connect(my_dfmffile_path)
op.inputs.rstfile_path.connect(my_rstfile_path)
my_dfmf_data_source = op.outputs.dfmf_data_source()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.write_motion_dfmf_file() # operator instantiation
op.inputs.model_data.Connect(my_model_data)
op.inputs.mode_shapes.Connect(my_mode_shapes)
op.inputs.lumped_mass.Connect(my_lumped_mass)
op.inputs.field_coordinates.Connect(my_field_coordinates)
op.inputs.nod.Connect(my_nod)
op.inputs.used_node_index.Connect(my_used_node_index)
op.inputs.eigenvalue.Connect(my_eigenvalue)
op.inputs.translational_mode_shape.Connect(my_translational_mode_shape)
op.inputs.rotational_mode_shape.Connect(my_rotational_mode_shape)
op.inputs.invrt_1.Connect(my_invrt_1)
op.inputs.invrt_2.Connect(my_invrt_2)
op.inputs.invrt_3.Connect(my_invrt_3)
op.inputs.invrt_4.Connect(my_invrt_4)
op.inputs.invrt_5.Connect(my_invrt_5)
op.inputs.invrt_6.Connect(my_invrt_6)
op.inputs.invrt_7.Connect(my_invrt_7)
op.inputs.invrt_8.Connect(my_invrt_8)
op.inputs.dfmffile_path.Connect(my_dfmffile_path)
op.inputs.rstfile_path.Connect(my_rstfile_path)
my_dfmf_data_source = op.outputs.dfmf_data_source.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.