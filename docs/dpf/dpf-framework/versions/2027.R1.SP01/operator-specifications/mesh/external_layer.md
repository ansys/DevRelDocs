---
category: mesh
plugin: core
license: None
---

# mesh:external layer

**Version: 0.0.0**

## Description

Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/external_layer) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="input_0"></a>
### mesh (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/external_layer) |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **1**| [nodes_mesh_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/external_layer) |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |
|  **2**| [elements_mesh_scoping](/docs/dpf/dpf-framework/versions/2027.R1.SP01/operator-specifications/mesh/external_layer) |[`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types) |


<a id="output_0"></a>
### mesh (Pin 0)

- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="output_1"></a>
### nodes_mesh_scoping (Pin 1)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)



<a id="output_2"></a>
### elements_mesh_scoping (Pin 2)

- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2027.R1.SP01/core-concepts/dpf-types)




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

 **Scripting name**: external_layer

 **Full name**: mesh.external_layer

 **Internal name**: meshed_external_layer_sector

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("meshed_external_layer_sector"); // operator instantiation
op.connect(0, my_mesh);
ansys::dpf::MeshedRegion my_mesh = op.getOutput<ansys::dpf::MeshedRegion>(0);
ansys::dpf::Scoping my_nodes_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(1);
ansys::dpf::Scoping my_elements_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(2);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.mesh.external_layer() # operator instantiation
op.inputs.mesh.connect(my_mesh)
my_mesh = op.outputs.mesh()
my_nodes_mesh_scoping = op.outputs.nodes_mesh_scoping()
my_elements_mesh_scoping = op.outputs.elements_mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.mesh.external_layer() # operator instantiation
op.inputs.mesh.Connect(my_mesh)
my_mesh = op.outputs.mesh.GetData()
my_nodes_mesh_scoping = op.outputs.nodes_mesh_scoping.GetData()
my_elements_mesh_scoping = op.outputs.elements_mesh_scoping.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.