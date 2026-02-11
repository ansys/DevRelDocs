---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to vector

**Version: 0.0.0**

## Description

Takes three scalar fields and assembles them as a 3D vector field.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [x](#input_0) |  |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong> | [y](#input_1) |  |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong> | [z](#input_2) |  |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="input_0"></a>
### x (Pin 0)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_1"></a>
### y (Pin 1)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_2"></a>
### z (Pin 2)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




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

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_vectors

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("assemble_scalars_to_vectors"); // operator instantiation
op.connect(0, my_x);
op.connect(1, my_y);
op.connect(2, my_z);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.x.connect(my_x)
op.inputs.y.connect(my_y)
op.inputs.z.connect(my_z)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.x.Connect(my_x)
op.inputs.y.Connect(my_y)
op.inputs.z.Connect(my_z)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.