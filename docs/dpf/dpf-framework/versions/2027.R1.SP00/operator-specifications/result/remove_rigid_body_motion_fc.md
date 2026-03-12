---
category: result
plugin: mapdl
license: None
---

# result:remove rigid body motion (fields container)

**Version: 0.0.0**

## Description

Removes rigid body mode from a total displacement field by minimization. Use a reference point in order to subtract its displacement to the result displacement field.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [reference_node_id](#input_1) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container with only one field is expected

<a id="input_1"></a>
### reference_node_id (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Id of the reference entity (node).

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

default is the mesh in the support


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
|  **1**| [translation_field](#output_1) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [rotation_field](#output_2) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **3**| [center_field](#output_3) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="output_1"></a>
### translation_field (Pin 1)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Global rigid translation vector

<a id="output_2"></a>
### rotation_field (Pin 2)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Global rigid rotation angles

<a id="output_3"></a>
### center_field (Pin 3)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Center of the rigid rotation


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: remove_rigid_body_motion_fc

 **Full name**: result.remove_rigid_body_motion_fc

 **Internal name**: ExtractRigidBodyMotion_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("ExtractRigidBodyMotion_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_reference_node_id);
op.connect(7, my_mesh);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::Field my_translation_field = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::Field my_rotation_field = op.getOutput<ansys::dpf::Field>(2);
ansys::dpf::Field my_center_field = op.getOutput<ansys::dpf::Field>(3);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.result.remove_rigid_body_motion_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.reference_node_id.connect(my_reference_node_id)
op.inputs.mesh.connect(my_mesh)
my_fields_container = op.outputs.fields_container()
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

op = dpf.operators.result.remove_rigid_body_motion_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.reference_node_id.Connect(my_reference_node_id)
op.inputs.mesh.Connect(my_mesh)
my_fields_container = op.outputs.fields_container.GetData()
my_translation_field = op.outputs.translation_field.GetData()
my_rotation_field = op.outputs.rotation_field.GetData()
my_center_field = op.outputs.center_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.