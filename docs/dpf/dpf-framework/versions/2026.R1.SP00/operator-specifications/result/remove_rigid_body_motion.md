---
category: result
plugin: mapdl
license: None
---

# result:remove rigid body motion (field)

**Version: 0.0.0**

## Description

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  reference_node_id |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Id of the reference entity (node). |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | default is the mesh in the support |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |
|  **Pin 1**| translation_field |[`field`](../../core-concepts/dpf-types.md#field) | Global rigid translation vector |
|  **Pin 2**| rotation_field |[`field`](../../core-concepts/dpf-types.md#field) | Global rigid rotation angles |
|  **Pin 3**| center_field |[`field`](../../core-concepts/dpf-types.md#field) | Center of the rigid rotation |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: remove_rigid_body_motion

 **Full name**: result.remove_rigid_body_motion

 **Internal name**: ExtractRigidBodyMotion

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("ExtractRigidBodyMotion"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_reference_node_id);
op.connect(7, my_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_translation_field = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_rotation_field = op.getOutput<ansys::dpf::Field>(2);
ansys::dpf::Field my_center_field = op.getOutput<ansys::dpf::Field>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.remove_rigid_body_motion() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.reference_node_id.connect(my_reference_node_id)
op.inputs.mesh.connect(my_mesh)
my_field = op.outputs.field()
my_translation_field = op.outputs.translation_field()
my_rotation_field = op.outputs.rotation_field()
my_center_field = op.outputs.center_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.result.remove_rigid_body_motion() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.reference_node_id.Connect(my_reference_node_id)
op.inputs.mesh.Connect(my_mesh)
my_field = op.outputs.field.GetData()
my_translation_field = op.outputs.translation_field.GetData()
my_rotation_field = op.outputs.rotation_field.GetData()
my_center_field = op.outputs.center_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.