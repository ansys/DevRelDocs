---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics

**Version: 0.0.0**

## Description

Generate tessellation for input mesh

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/mesh_to_graphics) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>2</strong> | [node_normals](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/mesh_to_graphics) |  |[`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/mesh_to_graphics) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="input_2"></a>
### node_normals (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

average element normals for node normals (default no, use element normals for node normals)

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [nodes](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/mesh_to_graphics) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **1**| [normals](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/mesh_to_graphics) |[`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **2**| [connectivity](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/mesh_to_graphics) |[`property_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### nodes (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

node coordinates

<a id="output_1"></a>
### normals (Pin 1)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)

node normals

<a id="output_2"></a>
### connectivity (Pin 2)

- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_to_graphics

 **Full name**: mesh.mesh_to_graphics

 **Internal name**: mesh_to_graphics

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mesh_to_graphics"); // operator instantiation
op.connect(1, my_mesh_scoping);
op.connect(2, my_node_normals);
op.connect(7, my_mesh);
ansys::dpf::Field my_nodes = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::Field my_normals = op.getOutput<ansys::dpf::Field>(1);
ansys::dpf::PropertyField my_connectivity = op.getOutput<ansys::dpf::PropertyField>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.mesh_to_graphics() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.node_normals.connect(my_node_normals)
op.inputs.mesh.connect(my_mesh)
my_nodes = op.outputs.nodes()
my_normals = op.outputs.normals()
my_connectivity = op.outputs.connectivity()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.mesh_to_graphics() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.node_normals.Connect(my_node_normals)
op.inputs.mesh.Connect(my_mesh)
my_nodes = op.outputs.nodes.GetData()
my_normals = op.outputs.normals.GetData()
my_connectivity = op.outputs.connectivity.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.