---
category: mapping
plugin: N/A
license: any_dpf_supported_increments
---

# mapping:create system coupling mapping workflow

**Version: 0.0.0**

## Description

Prepares a workflow able to map data from an input mesh to a target mesh.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  source_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh where the source data is defined. PointCloud interpolations support both mesh/meshes_container and field/fields_container, whereas mesh-based interpolations only support mesh/meshes_container. If not set, an input pin named "source_mesh/source_coords" is exposed. |
| <strong>Pin 1</strong>|  target_mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container), [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Mesh where the target data is defined. PointCloud interpolations support both mesh/meshes_container and field/fields_container, whereas mesh-based interpolations only support mesh/meshes_container. If not set, an input pin named "source_mesh/source_coords" is exposed. |
| <strong>Pin 2</strong>|  is_conservative |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Boolean that indicates if the mapped variable is conservative (e.g. force) or not (e.g. pressure). If not set, an input pin named "is_conservative" is exposed. |
| <strong>Pin 3</strong>|  location |[`string`](../../core-concepts/dpf-types.md#standard-types) | Mesh support of the mapped variable. Supported options: Nodal and Elemental. If not set, an input pin named "location" is exposed. |
| <strong>Pin 4</strong>|  dimensionality |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Dimensionality of the mapped variable. Supported options: 1 and 3 (scalars or vectors). If not set, an input pin named "dimensionality" is exposed. |
| <strong>Pin 5</strong>|  is_pointcloud |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Boolean that indicates if the PointCloud interpolation is preferred over the FEM interpolation. Default: false. |
| <strong>Pin 6</strong>|  target_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Scoping that restricts the interpolation to a given set of nodes/elements in the target mesh. If not set, an input pin named "target_scoping" is exposed. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mapping_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) | Workflow with input pin "source_data"; optionally "source_mesh/source_coords", "target_mesh/target_coords", "is_conservative", "location", "dimensionality" and "target_scoping"; and output pin "target_data". |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | If permissive is set to false, the validity of the source and target meshes is checked before performing mapping, raising an error if they are invalid. If permissive is set to true, no check is done. Default is true. |

## Scripting

 **Category**: mapping

 **Plugin**: N/A

 **Scripting name**: None

 **Full name**: None

 **Internal name**: create_sc_mapping_workflow

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("create_sc_mapping_workflow"); // operator instantiation
op.connect(0, my_source_mesh);
op.connect(1, my_target_mesh);
op.connect(2, my_is_conservative);
op.connect(3, my_location);
op.connect(4, my_dimensionality);
op.connect(5, my_is_pointcloud);
op.connect(6, my_target_scoping);
ansys::dpf::Workflow my_mapping_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.connect(my_source_mesh)
op.inputs.target_mesh.connect(my_target_mesh)
op.inputs.is_conservative.connect(my_is_conservative)
op.inputs.location.connect(my_location)
op.inputs.dimensionality.connect(my_dimensionality)
op.inputs.is_pointcloud.connect(my_is_pointcloud)
op.inputs.target_scoping.connect(my_target_scoping)
my_mapping_workflow = op.outputs.mapping_workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mapping.None() # operator instantiation
op.inputs.source_mesh.Connect(my_source_mesh)
op.inputs.target_mesh.Connect(my_target_mesh)
op.inputs.is_conservative.Connect(my_is_conservative)
op.inputs.location.Connect(my_location)
op.inputs.dimensionality.Connect(my_dimensionality)
op.inputs.is_pointcloud.Connect(my_is_pointcloud)
op.inputs.target_scoping.Connect(my_target_scoping)
my_mapping_workflow = op.outputs.mapping_workflow.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.