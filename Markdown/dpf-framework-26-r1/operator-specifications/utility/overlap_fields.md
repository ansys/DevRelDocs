---
category: utility
plugin: core
license: None
---

# utility:overlap fields

**Version: 0.0.0**

## Description

Take two fields and superpose them, the overlapping field will override values of base_field.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  base_field |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong>|  overlapping_field |[`field`](../../core-concepts/dpf-types.md#field) |  |

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

 **Internal name**: overlap_fields

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("overlap_fields"); // operator instantiation
op.connect(0, my_base_field);
op.connect(1, my_overlapping_field);
ansys::dpf::Field my_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.base_field.connect(my_base_field)
op.inputs.overlapping_field.connect(my_overlapping_field)
my_field = op.outputs.field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.base_field.Connect(my_base_field)
op.inputs.overlapping_field.Connect(my_overlapping_field)
my_field = op.outputs.field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.