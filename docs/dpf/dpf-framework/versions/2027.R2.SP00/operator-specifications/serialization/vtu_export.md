---
category: serialization
plugin: vtk
license: None
---

# serialization:vtu export

**Version: 0.0.0**

## Description


Export DPF mesh and field data to **VTK Unstructured Grid (VTU)** format.

Supports time-based data export (creates separate `.vtu` files per time step) and various output modes.
Compatible with VTK/ParaView visualization tools.


## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [directory](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [base_name](#input_1) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [mesh](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>3</strong> | [fields](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field) |
| <strong>100</strong> | [write_mode](#input_100) |  |[`string`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>101</strong> | [as_point_cloud](#input_101) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>102</strong> | [export_faces](#input_102) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>103</strong> | [mesh_properties](#input_103) |  |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`string_field`](../../core-concepts/dpf-types.md#string-field) |


<a id="input_0"></a>
### directory (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

directory path

<a id="input_1"></a>
### base_name (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

vtu base file name, (default is file)

<a id="input_2"></a>
### mesh (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

mesh

<a id="input_3"></a>
### fields (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container), [`property_field`](../../core-concepts/dpf-types.md#property-field)

Nodal, Face, or Elemental field, fields container (over time), or property field to export. When there is no support available in the exported mesh, that data is ignored.

<a id="input_100"></a>
### write_mode (Pin 100)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

Available are rawbinarycompressed, rawbinary, base64appended, base64inline, ascii, default is (rawbinarycompressed)

<a id="input_101"></a>
### as_point_cloud (Pin 101)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Whether to export the mesh as a point cloud. Default is False.

<a id="input_102"></a>
### export_faces (Pin 102)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Whether to also export faces as shell elements when the mesh contains cells. Default is False.

<a id="input_103"></a>
### mesh_properties (Pin 103)

- **Required:** No
- **Expected type(s):** [`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`string_field`](../../core-concepts/dpf-types.md#string-field)


List of mesh property type names (e.g., `mat`, `elshape`) to export as integer fields in the VTU output.
Only properties available in the mesh will be exported.



## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [path](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |


<a id="output_0"></a>
### path (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)

list of output vtu file path


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [permissive](../../core-concepts/operator-configurations.md#permissive)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, warning checks (like unit or data sizes) won't be done.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: vtu_export

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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