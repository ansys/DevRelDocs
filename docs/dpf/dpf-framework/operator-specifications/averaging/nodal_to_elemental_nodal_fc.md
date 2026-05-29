---
category: averaging
plugin: core
license: None
---

# averaging:nodal to elemental nodal (fields container)

**Version: 0.0.0**

## Description

Transforms Nodal fields_container to Elemental Nodal fields_container.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_nodal_fc) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [mesh](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_nodal_fc) |  |[`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [mesh_scoping](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_nodal_fc) |  |[`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>4</strong> | [extend_to_mid_nodes](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_nodal_fc) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### mesh (Pin 1)

- **Required:** No
- **Expected type(s):** [`abstract_meshed_region`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_3"></a>
### mesh_scoping (Pin 3)

- **Required:** No
- **Expected type(s):** [`scoping`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_4"></a>
### extend_to_mid_nodes (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Copy values from midside nodes to ElementalNodal field. Default: false


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/averaging/nodal_to_elemental_nodal_fc) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: nodal_to_elemental_nodal_fc

 **Full name**: averaging.nodal_to_elemental_nodal_fc

 **Internal name**: nodal_to_elemental_nodal_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("nodal_to_elemental_nodal_fc"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_mesh);
op.connect(3, my_mesh_scoping);
op.connect(4, my_extend_to_mid_nodes);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.nodal_to_elemental_nodal_fc() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.mesh.connect(my_mesh)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.extend_to_mid_nodes.connect(my_extend_to_mid_nodes)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.nodal_to_elemental_nodal_fc() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.mesh.Connect(my_mesh)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.extend_to_mid_nodes.Connect(my_extend_to_mid_nodes)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.