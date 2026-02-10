---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics_edges

**Version: 0.0.0**

## Description

Generate edges of surface elements for input mesh

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>6</strong> | [include_mid_nodes](#input_6) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> | [mesh](#input_7) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_6"></a>
### include_mid_nodes (Pin 6)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)



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
|  **0**| [nodes](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |
|  **2**| [connectivity](#output_2) |[`property_field`](../../core-concepts/dpf-types.md#property-field) |


<a id="output_0"></a>
### nodes (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)

node coordinates

<a id="output_2"></a>
### connectivity (Pin 2)

- **Expected type(s):** [`property_field`](../../core-concepts/dpf-types.md#property-field)




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

 **Scripting name**: mesh_to_graphics_edges

 **Full name**: mesh.mesh_to_graphics_edges

 **Internal name**: mesh_to_graphics_edges

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_to_graphics_edges"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(6, my_include_mid_nodes);
op.connect(7, my_mesh);
ansys::dpf::Field my_nodes = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::PropertyField my_connectivity = op.getOutput<ansys::dpf::PropertyField>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_to_graphics_edges() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.include_mid_nodes.connect(my_include_mid_nodes)
op.inputs.mesh.connect(my_mesh)
my_nodes = op.outputs.nodes()
my_connectivity = op.outputs.connectivity()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_to_graphics_edges() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.include_mid_nodes.Connect(my_include_mid_nodes)
op.inputs.mesh.Connect(my_mesh)
my_nodes = op.outputs.nodes.GetData()
my_connectivity = op.outputs.connectivity.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.