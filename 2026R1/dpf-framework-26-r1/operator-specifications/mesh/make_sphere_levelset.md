---
category: mesh
plugin: core
license: None
---

# mesh:make sphere levelset

**Version: 0.0.0**

## Description

Computes the level set for a sphere using coordinates.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [coordinates](#input_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [origin](#input_1) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [radius](#input_2) |[`double`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### coordinates (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_1"></a>
### origin (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

An overall 3d vector that gives a point of the plane.

<a id="input_2"></a>
### radius (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

Sphere radius.


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: make_sphere_levelset

 **Full name**: mesh.make_sphere_levelset

 **Internal name**: levelset::make_sphere

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("levelset::make_sphere"); // operator instantiation
op.connect(0, my_coordinates);
op.connect(1, my_origin);
op.connect(2, my_radius);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.make_sphere_levelset() # operator instantiation
op.inputs.coordinates.connect(my_coordinates)
op.inputs.origin.connect(my_origin)
op.inputs.radius.connect(my_radius)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.make_sphere_levelset() # operator instantiation
op.inputs.coordinates.Connect(my_coordinates)
op.inputs.origin.Connect(my_origin)
op.inputs.radius.Connect(my_radius)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.