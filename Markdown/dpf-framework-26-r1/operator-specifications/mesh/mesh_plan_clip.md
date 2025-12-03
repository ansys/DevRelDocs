---
category: mesh
plugin: core
license: None
---

# mesh:mesh plan clipper

**Version: 0.0.0**

## Description

Clips a volume mesh along a plane and keeps one side.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh_or_field |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  normal |[`field`](../../core-concepts/dpf-types.md#field) | An overall 3D vector that gives the normal direction of the plane. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  origin |[`field`](../../core-concepts/dpf-types.md#field) | An overall 3D vector that gives a point of the plane. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 2**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_plan_clip

 **Full name**: mesh.mesh_plan_clip

 **Internal name**: mesh_plan_clip

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_plan_clip"); // operator instantiation
op.connect(0, my_mesh_or_field);
op.connect(1, my_normal);
op.connect(2, my_origin);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_plan_clip() # operator instantiation
op.inputs.mesh_or_field.connect(my_mesh_or_field)
op.inputs.normal.connect(my_normal)
op.inputs.origin.connect(my_origin)
my_field = op.outputs.field()
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_plan_clip() # operator instantiation
op.inputs.mesh_or_field.Connect(my_mesh_or_field)
op.inputs.normal.Connect(my_normal)
op.inputs.origin.Connect(my_origin)
my_field = op.outputs.field.GetData()
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.