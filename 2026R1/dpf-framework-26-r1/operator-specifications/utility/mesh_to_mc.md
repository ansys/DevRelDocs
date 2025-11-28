---
category: utility
plugin: core
license: None
---

# utility:convert to meshes container

**Version: 0.0.0**

## Description

Creates a meshes container containing the mesh provided on pin 0.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | If a meshes container is set in input, it is passed on as an output with the additional label space (if any). |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label |[`label_space`](../../core-concepts/dpf-types.md#label-space) | Sets a label space. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes_container |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: mesh_to_mc

 **Full name**: utility.mesh_to_mc

 **Internal name**: InjectToMeshesContainer

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("InjectToMeshesContainer"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_label);
ansys::dpf::MeshesContainer my_meshes_container = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.mesh_to_mc() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.label.connect(my_label)
my_meshes_container = op.outputs.meshes_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.mesh_to_mc() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.label.Connect(my_label)
my_meshes_container = op.outputs.meshes_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.