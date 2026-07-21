---
category: scoping
plugin: core
license: None
---

# scoping:reduce sampling scoping

**Version: 0.0.0**

## Description

Take a scoping and remove half of it's content.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [mesh_scoping](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>1</strong> | [denominator](#input_1) |  |[`int32`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### mesh_scoping (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)



<a id="input_1"></a>
### denominator (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

Set the number of time the scoping is reduced (default is 2). Must be integer value above 1.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [mesh_scoping](#output_0) |[`scoping`](../../core-concepts/dpf-types.md#scoping) |


<a id="output_0"></a>
### mesh_scoping (Pin 0)

- **Expected type(s):** [`scoping`](../../core-concepts/dpf-types.md#scoping)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: scoping

 **Plugin**: core

 **Scripting name**: reduce_sampling

 **Full name**: scoping.reduce_sampling

 **Internal name**: scoping::reduce_sampling

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("scoping::reduce_sampling"); // operator instantiation
op.connect(0, my_mesh_scoping);
op.connect(1, my_denominator);
ansys::dpf::Scoping my_mesh_scoping = op.getOutput<ansys::dpf::Scoping>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.scoping.reduce_sampling() # operator instantiation
op.inputs.mesh_scoping.connect(my_mesh_scoping)
op.inputs.denominator.connect(my_denominator)
my_mesh_scoping = op.outputs.mesh_scoping()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.scoping.reduce_sampling() # operator instantiation
op.inputs.mesh_scoping.Connect(my_mesh_scoping)
op.inputs.denominator.Connect(my_denominator)
my_mesh_scoping = op.outputs.mesh_scoping.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.