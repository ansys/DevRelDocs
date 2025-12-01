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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  xx |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  yy |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong>|  zz |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 3</strong>|  xy |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 4</strong>|  yz |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 5</strong>|  xz |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 6</strong>|  yx |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 7</strong>|  zy |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 8</strong>|  zx |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 60</strong>|  symmetrical |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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