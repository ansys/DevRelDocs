---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to matrix fc

**Version: 0.0.0**

## Description

Take nine scalar fields container and assemble them as a 3x3 matrix fields. If the 'symmetrical' input is set to true, only six field containers are required (xx, yy, zz, xy, xz and yz).

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [xx](#input_0) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>1</strong> | [yy](#input_1) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>2</strong> | [zz](#input_2) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>3</strong> | [xy](#input_3) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>4</strong> | [yz](#input_4) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>5</strong> | [xz](#input_5) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>6</strong> | [yx](#input_6) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>7</strong> | [zy](#input_7) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>8</strong> | [zx](#input_8) |  |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |
| <strong>60</strong> | [symmetrical](#input_60) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### xx (Pin 0)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_1"></a>
### yy (Pin 1)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_2"></a>
### zz (Pin 2)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_3"></a>
### xy (Pin 3)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_4"></a>
### yz (Pin 4)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_5"></a>
### xz (Pin 5)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_6"></a>
### yx (Pin 6)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_7"></a>
### zy (Pin 7)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_8"></a>
### zx (Pin 8)

- **Required:** No
- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)



<a id="input_60"></a>
### symmetrical (Pin 60)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




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

 **Internal name**: assemble_scalars_to_matrices_fc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("assemble_scalars_to_matrices_fc"); // operator instantiation
op.connect(0, my_xx);
op.connect(1, my_yy);
op.connect(2, my_zz);
op.connect(3, my_xy);
op.connect(4, my_yz);
op.connect(5, my_xz);
op.connect(6, my_yx);
op.connect(7, my_zy);
op.connect(8, my_zx);
op.connect(60, my_symmetrical);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.xx.connect(my_xx)
op.inputs.yy.connect(my_yy)
op.inputs.zz.connect(my_zz)
op.inputs.xy.connect(my_xy)
op.inputs.yz.connect(my_yz)
op.inputs.xz.connect(my_xz)
op.inputs.yx.connect(my_yx)
op.inputs.zy.connect(my_zy)
op.inputs.zx.connect(my_zx)
op.inputs.symmetrical.connect(my_symmetrical)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.xx.Connect(my_xx)
op.inputs.yy.Connect(my_yy)
op.inputs.zz.Connect(my_zz)
op.inputs.xy.Connect(my_xy)
op.inputs.yz.Connect(my_yz)
op.inputs.xz.Connect(my_xz)
op.inputs.yx.Connect(my_yx)
op.inputs.zy.Connect(my_zy)
op.inputs.zx.Connect(my_zx)
op.inputs.symmetrical.Connect(my_symmetrical)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.