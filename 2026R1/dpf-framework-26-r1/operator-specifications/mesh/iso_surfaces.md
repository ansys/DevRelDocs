---
category: mesh
plugin: core
license: None
---

# mesh:iso surfaces

**Version: 0.0.0**

## Description

Extract multiple iso-contours from mesh_cut operator and set it into a meshes container. If pin 1 is provided, "num_surfaces" iso-contours will be computed, ranging from "min_value" to "max_value" linearly. If pin 4 is provided, the iso-values are the one set by the user. The iso-values are stored into a FieldsContainer.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) | Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2. |
| <strong>Pin 1</strong>|  num_surfaces |[`int32`](../../core-concepts/dpf-types.md#standard-types) | If provided, iso_values are linearly computed between the min and the max of the field of results. If not, iso_values must be provided by the user through pin 4 |
| <strong>Pin 2</strong>|  mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0. |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  slice_surfaces |[`bool`](../../core-concepts/dpf-types.md#standard-types) | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |
| <strong>Pin 4</strong>|  vector_iso_values |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types) | If provided, user defined iso_values to compute. If not provided, iso_values are linearly compute between the min and the max of the field of results. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
|  **Pin 1**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: iso_surfaces

 **Full name**: mesh.iso_surfaces

 **Internal name**: iso_surfaces

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("iso_surfaces"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_num_surfaces);
op.connect(2, my_mesh);
op.connect(3, my_slice_surfaces);
op.connect(4, my_vector_iso_values);
ansys::dpf::MeshesContainer my_meshes = op.getOutput<ansys::dpf::MeshesContainer>(0);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.iso_surfaces() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.num_surfaces.connect(my_num_surfaces)
op.inputs.mesh.connect(my_mesh)
op.inputs.slice_surfaces.connect(my_slice_surfaces)
op.inputs.vector_iso_values.connect(my_vector_iso_values)
my_meshes = op.outputs.meshes()
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.iso_surfaces() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.num_surfaces.Connect(my_num_surfaces)
op.inputs.mesh.Connect(my_mesh)
op.inputs.slice_surfaces.Connect(my_slice_surfaces)
op.inputs.vector_iso_values.Connect(my_vector_iso_values)
my_meshes = op.outputs.meshes.GetData()
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.