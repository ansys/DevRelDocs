---
category: mesh
plugin: core
license: None
---

# mesh:acmo mesh provider

**Version: 0.0.0**

## Description

Converts an Assembly Mesh into a DPF Meshes container

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  assembly_mesh |`ans_dispatch_holder`, `struct IAnsDispatch` |  |
| <strong>Pin 1</strong>|  unit |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes_container |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: acmo_mesh_provider

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("acmo_mesh_provider"); // operator instantiation
op.connect(0, my_assembly_mesh);
op.connect(1, my_unit);
ansys::dpf::MeshesContainer my_meshes_container = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.assembly_mesh.connect(my_assembly_mesh)
op.inputs.unit.connect(my_unit)
my_meshes_container = op.outputs.meshes_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.None() # operator instantiation
op.inputs.assembly_mesh.Connect(my_assembly_mesh)
op.inputs.unit.Connect(my_unit)
my_meshes_container = op.outputs.meshes_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.