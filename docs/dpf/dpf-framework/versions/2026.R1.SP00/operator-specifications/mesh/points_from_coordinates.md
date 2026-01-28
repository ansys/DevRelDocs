---
category: mesh
plugin: core
license: None
---

# mesh:points from coordinates

**Version: 0.0.0**

## Description

Extract a mesh made of points elements. This mesh is made from input meshes coordinates on the input scopings.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  nodes_to_keep |[`scoping`](../../core-concepts/dpf-types.md#scoping), [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: points_from_coordinates

 **Full name**: mesh.points_from_coordinates

 **Internal name**: mesh::points_from_coordinates

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh::points_from_coordinates"); // operator instantiation
op.connect(0, my_nodes_to_keep);
op.connect(1, my_mesh);
ansys::dpf::MeshedRegion my_abstract_meshed_region = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.points_from_coordinates() # operator instantiation
op.inputs.nodes_to_keep.connect(my_nodes_to_keep)
op.inputs.mesh.connect(my_mesh)
my_abstract_meshed_region = op.outputs.abstract_meshed_region()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.points_from_coordinates() # operator instantiation
op.inputs.nodes_to_keep.Connect(my_nodes_to_keep)
op.inputs.mesh.Connect(my_mesh)
my_abstract_meshed_region = op.outputs.abstract_meshed_region.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.