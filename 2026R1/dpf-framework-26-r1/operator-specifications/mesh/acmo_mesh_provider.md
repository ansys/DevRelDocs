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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation. Some inputs are required, while others are optional and provide additional configuration. Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|-------|------|-------|------------------|
| <strong>0</strong> |  [assembly_mesh](#input_0) | <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`ans_dispatch_holder`, `struct IAnsDispatch` |
| <strong>1</strong>|  [unit](#input_1) | |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### assembly_mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** `ans_dispatch_holder`, `struct IAnsDispatch`



<a id="input_1"></a>
### unit (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

This table lists the output pins for this operator. Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing. Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes_container](#output_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### meshes_container (Pin 0)

- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)




## Configurations

This operator supports configuration options that modify its behavior.

### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: acmo_mesh_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments. Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.


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