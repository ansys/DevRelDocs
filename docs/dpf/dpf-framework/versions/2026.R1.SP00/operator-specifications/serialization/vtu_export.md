---
category: serialization
plugin: vtk
license: None
---

# serialization:vtu export

**Version: 0.0.0**

## Description

Export DPF data into vtu format.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  directory |[`string`](../../core-concepts/dpf-types.md#standard-types) | directory path |
| <strong>Pin 1</strong>|  base_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | vtu base file name, (default is file) |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) | Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored. |
| <strong>Pin 100</strong>|  write_mode |[`string`](../../core-concepts/dpf-types.md#standard-types) | Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed) |
| <strong>Pin 101</strong>|  as_point_cloud |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Whether to export the mesh as a point cloud. Default is False. |
| <strong>Pin 102</strong>|  export_faces |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Whether to also export faces as shell elements when the mesh contains cells. Default is False. |
| <strong>Pin 103</strong>|  mesh_properties |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`string_field`](../../core-concepts/dpf-types.md#string-field) | List of names of mesh properties to export. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| path |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | list of output vtu file path |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: vtu_export

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("vtu_export"); // operator instantiation
op.connect(0, my_directory);
op.connect(1, my_base_name);
op.connect(2, my_mesh);
op.connect(3, my_fields);
op.connect(100, my_write_mode);
op.connect(101, my_as_point_cloud);
op.connect(102, my_export_faces);
op.connect(103, my_mesh_properties);
ansys::dpf::DataSources my_path = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.directory.connect(my_directory)
op.inputs.base_name.connect(my_base_name)
op.inputs.mesh.connect(my_mesh)
op.inputs.fields1.connect(my_fields1)
op.inputs.fields2.connect(my_fields2)
op.inputs.write_mode.connect(my_write_mode)
op.inputs.as_point_cloud.connect(my_as_point_cloud)
op.inputs.export_faces.connect(my_export_faces)
op.inputs.mesh_properties.connect(my_mesh_properties)
my_path = op.outputs.path()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.directory.Connect(my_directory)
op.inputs.base_name.Connect(my_base_name)
op.inputs.mesh.Connect(my_mesh)
op.inputs.fields.Connect(my_fields)
op.inputs.write_mode.Connect(my_write_mode)
op.inputs.as_point_cloud.Connect(my_as_point_cloud)
op.inputs.export_faces.Connect(my_export_faces)
op.inputs.mesh_properties.Connect(my_mesh_properties)
my_path = op.outputs.path.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.