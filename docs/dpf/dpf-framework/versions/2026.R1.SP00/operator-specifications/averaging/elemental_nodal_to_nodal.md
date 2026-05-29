---
category: averaging
plugin: core
license: None
---

# averaging:elemental nodal to nodal (field)

**Version: 0.0.0**

## Description

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh_scoping](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |  |[`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>2</strong> | [should_average](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>4</strong> | [extend_to_mid_nodes](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>5</strong> | [extend_weights_to_mid_nodes](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |  |[`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
| <strong>7</strong> | [mesh](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types), [`fields_container`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

field or fields container with only one field is expected

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

average only on these entities

<a id="input_2"></a>
### should_average (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities).

<a id="input_4"></a>
### extend_to_mid_nodes (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Compute mid nodes (when available) by averaging the neighbour primary nodes.

<a id="input_5"></a>
### extend_weights_to_mid_nodes (Pin 5)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Extends weights to mid nodes (when available). Default is false.

<a id="input_7"></a>
### mesh (Pin 7)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |[`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |
|  **1**| [weight](/docs/dpf/dpf-framework/versions/2026.R1.SP00/operator-specifications/averaging/elemental_nodal_to_nodal) |[`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)



<a id="output_1"></a>
### weight (Pin 1)

- **Expected type(s):** [`property_field`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)

Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later.


## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/versions/2026.R1.SP00/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: elemental_nodal_to_nodal

 **Full name**: averaging.elemental_nodal_to_nodal

 **Internal name**: elemental_nodal_To_nodal

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("elemental_nodal_To_nodal"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_mesh_scoping);
op.connect(2, my_should_average);
op.connect(4, my_extend_to_mid_nodes);
op.connect(5, my_extend_weights_to_mid_nodes);
op.connect(7, my_mesh);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
ansys::dpf::PropertyField my_weight = op.getOutput<ansys::dpf::PropertyField>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.elemental_nodal_to_nodal() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.should_average.connect(my_should_average)
op.inputs.extend_to_mid_nodes.connect(my_extend_to_mid_nodes)
op.inputs.extend_weights_to_mid_nodes.connect(my_extend_weights_to_mid_nodes)
op.inputs.mesh.connect(my_mesh)
my_field = op.outputs.field()
my_weight = op.outputs.weight()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.elemental_nodal_to_nodal() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.should_average.Connect(my_should_average)
op.inputs.extend_to_mid_nodes.Connect(my_extend_to_mid_nodes)
op.inputs.extend_weights_to_mid_nodes.Connect(my_extend_weights_to_mid_nodes)
op.inputs.mesh.Connect(my_mesh)
my_field = op.outputs.field.GetData()
my_weight = op.outputs.weight.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.