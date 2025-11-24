---
category: math
plugin: core
license: None
---

# math:min/max over time

**Version: 0.0.0**

## Description

Evaluates minimum/maximum over time/frequency.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  int32 |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Define min or max. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field_container_1 |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| field_container_2 |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: math

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mechanical::min_max_over_time

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical::min_max_over_time"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(5, my_int32);
ansys::dpf::FieldsContainer my_field_container_1 = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::FieldsContainer my_field_container_2 = op.getOutput<ansys::dpf::FieldsContainer>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.int32.connect(my_int32)
my_field_container_1 = op.outputs.field_container_1()
my_field_container_2 = op.outputs.field_container_2()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.math.None() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.int32.Connect(my_int32)
my_field_container_1 = op.outputs.field_container_1.GetData()
my_field_container_2 = op.outputs.field_container_2.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.