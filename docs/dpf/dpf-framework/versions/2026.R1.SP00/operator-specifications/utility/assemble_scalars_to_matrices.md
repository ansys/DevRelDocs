---
category: utility
plugin: core
license: None
---

# utility:assemble scalars to matrix

**Version: 0.0.0**

## Description

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong>|  [xx](#input_0) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>1</strong>|  [yy](#input_1) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>2</strong>|  [zz](#input_2) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>3</strong>|  [xy](#input_3) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>4</strong>|  [yz](#input_4) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>5</strong>|  [xz](#input_5) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>6</strong>|  [yx](#input_6) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>7</strong>|  [zy](#input_7) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>8</strong>|  [zx](#input_8) |[`field`](../../core-concepts/dpf-types.md#field) |
| <strong>60</strong>|  [symmetrical](#input_60) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### xx (Pin 0)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_1"></a>
### yy (Pin 1)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_2"></a>
### zz (Pin 2)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_3"></a>
### xy (Pin 3)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_4"></a>
### yz (Pin 4)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_5"></a>
### xz (Pin 5)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_6"></a>
### yx (Pin 6)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_7"></a>
### zy (Pin 7)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_8"></a>
### zx (Pin 8)

- **Required:** No
- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)



<a id="input_60"></a>
### symmetrical (Pin 60)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: assemble_scalars_to_matrices

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("assemble_scalars_to_matrices"); // operator instantiation
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
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
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
my_field = op.outputs.field()
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
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.