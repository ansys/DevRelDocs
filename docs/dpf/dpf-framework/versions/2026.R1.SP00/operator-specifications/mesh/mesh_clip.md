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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [field](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [iso_value](#input_1) |[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [closed_surface](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong>|  [mesh](#input_3) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>4</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [slice_surfaces](#input_4) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_1"></a>
### iso_value (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

iso value

<a id="input_2"></a>
### closed_surface (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

1: closed surface, 0: iso surface.

<a id="input_3"></a>
### mesh (Pin 3)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_4"></a>
### slice_surfaces (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [mesh](#output_2) |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="output_2"></a>
### mesh (Pin 2)

- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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