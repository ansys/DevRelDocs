---
category: scoping
plugin: core
license: None
---

# scoping:extend midside nodal scoping

**Version: 0.0.0**

## Description

Extends the input nodal scoping with the neighbor corner nodes of every midside node in the input. For each midside node in the scoping, the two corner nodes that bound it on the element edge are added to the output scoping. 

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [nodal_mesh_scoping](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>1</strong> | [mesh](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>200</strong> | [add_new_properties_to_mesh](#input_200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### nodal_mesh_scoping (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Nodal mesh scoping. Must have nodal location, otherwise an error is thrown.

<a id="input_1"></a>
### mesh (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh region used to determine element connectivity and identify midside nodes.

<a id="input_200"></a>
### add_new_properties_to_mesh (Pin 200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, the new mesh properties that are computed (like reversed connectivities) are kept in the mesh. Default is false.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [nodal_mesh_scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### nodal_mesh_scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

Extended nodal scoping containing all original nodes plus corner nodes neighboring any midside nodes.


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: extend_midside_nodal_scoping

 **Full name**: scoping.extend_midside_nodal_scoping

 **Internal name**: extend_midside_nodal_scoping

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("extend_midside_nodal_scoping"); // operator instantiation
op.connect(0, my_nodal_mesh_scoping);
op.connect(1, my_mesh);
op.connect(200, my_add_new_properties_to_mesh);
ansys::dpf::Scoping my_nodal_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.extend_midside_nodal_scoping() # operator instantiation
op.inputs.nodal_mesh_scoping.connect(my_nodal_mesh_scoping)
op.inputs.mesh.connect(my_mesh)
op.inputs.add_new_properties_to_mesh.connect(my_add_new_properties_to_mesh)
my_nodal_mesh_scoping = op.outputs.nodal_mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.extend_midside_nodal_scoping() # operator instantiation
op.inputs.nodal_mesh_scoping.Connect(my_nodal_mesh_scoping)
op.inputs.mesh.Connect(my_mesh)
op.inputs.add_new_properties_to_mesh.Connect(my_add_new_properties_to_mesh)
my_nodal_mesh_scoping = op.outputs.nodal_mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.