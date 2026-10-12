---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:faces area

**Version: 0.0.0**

## Description

Compute the measure of the Faces (surface for 2D faces of a 3D model or length for 1D faces of a 2D model) using default shape functions, except for polygons.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region)



<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)

If not provided, the measure of all Faces in the mesh is computed. If provided, the Scoping needs to have "Faces" location.


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

 **Scripting name**: faces_area

 **Full name**: geo.faces_area

 **Internal name**: face::area

 **License**: any_dpf_supported_increments

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("face::area"); // operator instantiation
op.connect(0, my_mesh);
op.connect(1, my_mesh_scoping);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.geo.faces_area() # operator instantiation
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.geo.faces_area() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.