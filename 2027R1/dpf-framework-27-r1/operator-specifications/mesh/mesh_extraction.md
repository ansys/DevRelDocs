---
category: mesh
plugin: core
license: None
---

# mesh:mesh extraction

**Version: 0.0.0**

## Description

Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [extension](#input_2) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_2"></a>
### extension (Pin 2)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Number of extension layer


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [abstract_meshed_region](#output_0) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_0"></a>
### abstract_meshed_region (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




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

 **Scripting name**: mesh_extraction

 **Full name**: mesh.mesh_extraction

 **Internal name**: mesh_extraction

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_extraction"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_mesh_scoping);
op.connect(2, my_extension);
ansys::dpf::MeshedRegion my_abstract_meshed_region = op.getOutput<ansys::dpf::MeshedRegion>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_extraction() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.extension.connect(my_extension)
my_abstract_meshed_region = op.outputs.abstract_meshed_region()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_extraction() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.extension.Connect(my_extension)
my_abstract_meshed_region = op.outputs.abstract_meshed_region.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.