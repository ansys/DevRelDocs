---
category: averaging
plugin: core
license: None
---

# averaging:nodal to elemental nodal (field)

**Version: 0.0.0**

## Description

Transforms a Nodal field to an ElementalNodal field, The result is computed on a given element's scoping.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>4</strong> | [extend_to_mid_nodes](#input_4) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>10</strong> | [collapse_shell_layers](#input_10) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container with only one field is expected

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_4"></a>
### extend_to_mid_nodes (Pin 4)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Copy values from midside nodes to ElementalNodal field. Default: false

<a id="input_10"></a>
### collapse_shell_layers (Pin 10)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If true, the data across different shell layers is averaged as well (default is false).


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

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: nodal_to_elemental_nodal

 **Full name**: averaging.nodal_to_elemental_nodal

 **Internal name**: nodal_to_elemental_nodal

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("nodal_to_elemental_nodal"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_mesh_scoping);
op.connect(4, my_extend_to_mid_nodes);
op.connect(10, my_collapse_shell_layers);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.nodal_to_elemental_nodal() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.extend_to_mid_nodes.connect(my_extend_to_mid_nodes)
op.inputs.collapse_shell_layers.connect(my_collapse_shell_layers)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.nodal_to_elemental_nodal() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.extend_to_mid_nodes.Connect(my_extend_to_mid_nodes)
op.inputs.collapse_shell_layers.Connect(my_collapse_shell_layers)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.