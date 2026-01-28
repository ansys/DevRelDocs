---
category: mesh
plugin: core
license: None
---

# mesh:external layer

**Version: 0.0.0**

## Description

Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
|  **Pin 1**| nodes_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
|  **Pin 2**| elements_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: external_layer

 **Full name**: mesh.external_layer

 **Internal name**: meshed_external_layer_sector

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("meshed_external_layer_sector"); // operator instantiation
op.connect(0, my_mesh);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
ansys::dpf::Scoping my_nodes_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(1);
ansys::dpf::Scoping my_elements_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.external_layer() # operator instantiation
op.inputs.mesh.connect(my_mesh)
my_mesh = op.outputs.mesh()
my_nodes_mesh_scoping = op.outputs.nodes_mesh_scoping()
my_elements_mesh_scoping = op.outputs.elements_mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.external_layer() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
my_mesh = op.outputs.mesh.GetData()
my_nodes_mesh_scoping = op.outputs.nodes_mesh_scoping.GetData()
my_elements_mesh_scoping = op.outputs.elements_mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.