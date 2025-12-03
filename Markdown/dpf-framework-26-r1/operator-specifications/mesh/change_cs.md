---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:change cs (meshes)

**Version: 0.0.0**

## Description

Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinate_system |[`field`](../../core-concepts/dpf-types.md#field) | 3-3 rotation matrix + 3 translations (X, Y, Z) |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshed_region |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: change_cs

 **Full name**: mesh.change_cs

 **Internal name**: mesh::change_cs

 **License**: any_dpf_supported_increments

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh::change_cs"); // operator instantiation
op.connect(0, my_meshes);
op.connect(1, my_coordinate_system);
ansys::dpf::MeshedRegion my_meshed_region = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.change_cs() # operator instantiation
op.inputs.meshes.connect(my_meshes)
op.inputs.coordinate_system.connect(my_coordinate_system)
my_meshed_region_as_meshed_region = op.outputs.meshed_region_as_meshed_region()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.change_cs() # operator instantiation
op.inputs.meshes.Connect(my_meshes)
op.inputs.coordinate_system.Connect(my_coordinate_system)
my_meshed_region = op.outputs.meshed_region.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.