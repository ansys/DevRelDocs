---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:split mesh wrt property

**Version: 0.0.0**

## Description

Split the input mesh into several meshes based on a given property (material property be default)

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Scoping |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 13</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: split_mesh

 **Full name**: mesh.split_mesh

 **Internal name**: split_mesh

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("split_mesh"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(7, my_mesh);
op.connect(13, my_property);
ansys::dpf::MeshesContainer my_meshes = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.split_mesh() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
op.inputs.property.connect(my_property)
my_meshes = op.outputs.meshes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.split_mesh() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
op.inputs.property.Connect(my_property)
my_meshes = op.outputs.meshes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.