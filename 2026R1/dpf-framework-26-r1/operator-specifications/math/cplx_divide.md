---
category: math
plugin: core
license: None
---

# math:/ (complex fields)

**Version: 0.0.0**

## Description

Computes division between two field containers containing complex fields.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerA |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_containerB |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: cplx_divide

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("cplx_divide"); // operator instantiation
op.connect(0, my_fields_containerA);
op.connect(1, my_fields_containerB);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_containerA.connect(my_fields_containerA)
op.inputs.fields_containerB.connect(my_fields_containerB)
my_fields_container = op.outputs.fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_containerA.Connect(my_fields_containerA)
op.inputs.fields_containerB.Connect(my_fields_containerB)
my_fields_container = op.outputs.fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.