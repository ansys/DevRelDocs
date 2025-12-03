---
category: mesh
plugin: core
license: None
---

# mesh:mesh clipper

**Version: 0.0.0**

## Description

Clips a volume mesh along an iso value x, and construct the volume mesh defined by v < x.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  iso_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | iso value |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  closed_surface |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 1: closed surface, 0: iso surface. |
| <strong>Pin 3</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  slice_surfaces |[`bool`](../../core-concepts/dpf-types.md#standard-types) | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 2**| mesh |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_clip

 **Full name**: mesh.mesh_clip

 **Internal name**: mesh_clip

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_clip"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_iso_value);
op.connect(2, my_closed_surface);
op.connect(3, my_mesh);
op.connect(4, my_slice_surfaces);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_clip() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.iso_value.connect(my_iso_value)
op.inputs.closed_surface.connect(my_closed_surface)
op.inputs.mesh.connect(my_mesh)
op.inputs.slice_surfaces.connect(my_slice_surfaces)
my_field = op.outputs.field()
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_clip() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.iso_value.Connect(my_iso_value)
op.inputs.closed_surface.Connect(my_closed_surface)
op.inputs.mesh.Connect(my_mesh)
op.inputs.slice_surfaces.Connect(my_slice_surfaces)
my_field = op.outputs.field.GetData()
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.