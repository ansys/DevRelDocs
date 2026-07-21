---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:from scopings

**Version: 0.0.0**

## Description

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [scopings_container](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>2</strong> | [inclusive](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [nodes_only](#input_3) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_1"></a>
### scopings_container (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

if nodal scoping, then the scoping is transposed respecting the inclusive pin

<a id="input_2"></a>
### inclusive (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included

<a id="input_3"></a>
### nodes_only (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

returns mesh with nodes only (without any elements). Default is false.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [meshes](#output_0) |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |


<a id="output_0"></a>
### meshes (Pin 0)

- **Expected type(s):** [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: from_scopings

 **Full name**: mesh.from_scopings

 **Internal name**: meshes::by_scopings

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("meshes::by_scopings"); // operator instantiation
op.connect(1, my_scopings_container);
op.connect(2, my_inclusive);
op.connect(3, my_nodes_only);
op.connect(7, my_mesh);
ansys::dpf::MeshesContainer my_meshes = op.getOutput<ansys::dpf::MeshesContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.from_scopings() # operator instantiation
op.inputs.scopings_container.connect(my_scopings_container)
op.inputs.inclusive.connect(my_inclusive)
op.inputs.nodes_only.connect(my_nodes_only)
op.inputs.mesh.connect(my_mesh)
my_meshes = op.outputs.meshes()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.from_scopings() # operator instantiation
op.inputs.scopings_container.Connect(my_scopings_container)
op.inputs.inclusive.Connect(my_inclusive)
op.inputs.nodes_only.Connect(my_nodes_only)
op.inputs.mesh.Connect(my_mesh)
my_meshes = op.outputs.meshes.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.