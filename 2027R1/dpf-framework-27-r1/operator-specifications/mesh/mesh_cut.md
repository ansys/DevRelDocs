---
category: mesh
plugin: core
license: None
---

# mesh:mesh cutter

**Version: 0.0.0**

## Description

Extracts a skin of the mesh in triangles in a new meshed region.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [iso_value](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`double`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>2</strong> | [closed_surface](#input_2) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [mesh](#input_3) |  |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |
| <strong>4</strong> | [slice_surfaces](#input_4) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

<a id="input_1"></a>
### iso_value (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`double`](../../core-concepts/dpf-types.md#standard-types)

iso value

<a id="input_2"></a>
### closed_surface (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

1: closed surface, 0: iso surface.

<a id="input_3"></a>
### mesh (Pin 3)

- **Required:** No
- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region)

Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

<a id="input_4"></a>
### slice_surfaces (Pin 4)

- **Required:** Yes
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **2**| [mesh](#output_2) |[`meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="output_2"></a>
### mesh (Pin 2)

- **Expected type(s):** [`meshed_region`](../../core-concepts/dpf-types.md#meshed-region)




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

 **Scripting name**: mesh_cut

 **Full name**: mesh.mesh_cut

 **Internal name**: mesh_cut

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_cut"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_iso_value);
op.connect(2, my_closed_surface);
op.connect(3, my_mesh);
op.connect(4, my_slice_surfaces);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_cut() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.iso_value.connect(my_iso_value)
op.inputs.closed_surface.connect(my_closed_surface)
op.inputs.mesh.connect(my_mesh)
op.inputs.slice_surfaces.connect(my_slice_surfaces)
my_mesh = op.outputs.mesh()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_cut() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.iso_value.Connect(my_iso_value)
op.inputs.closed_surface.Connect(my_closed_surface)
op.inputs.mesh.Connect(my_mesh)
op.inputs.slice_surfaces.Connect(my_slice_surfaces)
my_mesh = op.outputs.mesh.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.