---
category: geo
plugin: core
license: None
---

# geo:scoping normals

**Version: 0.0.0**

## Description

compute the normals at the given nodes or element scoping based on the given mesh (first version, the element normal is only handled on the shell elements)

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](#input_0) |  |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>3</strong> | [field](#input_3) |  |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_3"></a>
### field (Pin 3)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: geo

 **Plugin**: core

 **Scripting name**: normals

 **Full name**: geo.normals

 **Internal name**: normals_provider

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("normals_provider"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_mesh_scoping);
op.connect(3, my_field);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.normals() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.field.connect(my_field)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.normals() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.field.Connect(my_field)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.