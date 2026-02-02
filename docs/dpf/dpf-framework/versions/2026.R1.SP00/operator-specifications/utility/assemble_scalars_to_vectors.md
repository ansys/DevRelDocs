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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  x |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  y |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong>|  z |[`field`](../../core-concepts/dpf-types.md#field) |  |

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

 **Internal name**: assemble_scalars_to_vectors

 **License**: None

## Examples

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