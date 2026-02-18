---
category: averaging
plugin: core
license: None
---

# averaging:to nodal (field)

**Version: 0.0.0**

## Description

Transforms a field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [field](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [mesh_scoping](#input_1) |  |[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>26</strong> | [merge_solid_shell](#input_26) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>27</strong> | [shell_layer](#input_27) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### field (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

field or fields container with only one field is expected

<a id="input_1"></a>
### mesh_scoping (Pin 1)

- **Required:** No
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_26"></a>
### merge_solid_shell (Pin 26)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

For shell/solid mixed fields, group in the same field all solids and shells (false by default). If this pin is true, a shell_layer needs to be specified.

<a id="input_27"></a>
### shell_layer (Pin 27)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

0: Top, 1: Bottom, 2: TopBottom, 3: Mid, 4: TopBottomMid. If merge_solid_shell is true, this pin needs to be specified to a value that extracts only one layer (Top, Bottom or Mid).


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

 **Scripting name**: to_nodal

 **Full name**: averaging.to_nodal

 **Internal name**: to_nodal

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("to_nodal"); // operator instantiation
op.connect(0, my_field);
op.connect(1, my_mesh_scoping);
op.connect(26, my_merge_solid_shell);
op.connect(27, my_shell_layer);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.averaging.to_nodal() # operator instantiation
op.inputs.field.connect(my_field)
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.merge_solid_shell.connect(my_merge_solid_shell)
op.inputs.shell_layer.connect(my_shell_layer)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.averaging.to_nodal() # operator instantiation
op.inputs.field.Connect(my_field)
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.merge_solid_shell.Connect(my_merge_solid_shell)
op.inputs.shell_layer.Connect(my_shell_layer)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.