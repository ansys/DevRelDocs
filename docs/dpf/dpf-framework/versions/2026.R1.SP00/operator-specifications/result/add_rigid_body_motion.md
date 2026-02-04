---
category: result
plugin: mapdl
license: None
---

# result:add rigid body motion (field)

**Version: 0.0.0**

## Description

Adds a given rigid translation, center and rotation from a displacement field. The rotation is given in terms of rotations angles. Note that the displacement field has to be in the global coordinate system

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  displacement_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  translation_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  rotation_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  center_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | default is the mesh in the support |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: add_rigid_body_motion

 **Full name**: result.add_rigid_body_motion

 **Internal name**: RigidBodyAddition

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("RigidBodyAddition"); // operator instantiation
op.connect(0, my_displacement_field);
op.connect(1, my_translation_field);
op.connect(2, my_rotation_field);
op.connect(3, my_center_field);
op.connect(7, my_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.add_rigid_body_motion() # operator instantiation
op.inputs.displacement_field.connect(my_displacement_field)
op.inputs.translation_field.connect(my_translation_field)
op.inputs.rotation_field.connect(my_rotation_field)
op.inputs.center_field.connect(my_center_field)
op.inputs.mesh.connect(my_mesh)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.add_rigid_body_motion() # operator instantiation
op.inputs.displacement_field.Connect(my_displacement_field)
op.inputs.translation_field.Connect(my_translation_field)
op.inputs.rotation_field.Connect(my_rotation_field)
op.inputs.center_field.Connect(my_center_field)
op.inputs.mesh.Connect(my_mesh)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.