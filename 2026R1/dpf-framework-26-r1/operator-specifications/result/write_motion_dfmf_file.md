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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  model_data |[`property_field`](../../core-concepts/dpf-types.md#property-field) | data describing the finite element model |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mode_shapes |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the mode shapes, which are CST and NOR for the cms method |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  lumped_mass |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) | FieldsContainers containing the lumped mass |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_coordinates |[`field`](../../core-concepts/dpf-types.md#field) | coordinates of all nodes |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nod |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  used_node_index |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 6</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  eigenvalue |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  translational_mode_shape |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 8</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rotational_mode_shape |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 9</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_1 |[`double`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 10</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_2 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 11</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_3 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 12</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_4 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_5 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 14</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_6 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 15</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_7 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invrt_8 |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 17</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  dfmffile_path |[`string`](../../core-concepts/dpf-types.md#standard-types) | path with motion dfmf extension where the export occurs |
| <strong>Pin 18</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rstfile_path |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| dfmf_data_source |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data Source containing the dfmf file generated. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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