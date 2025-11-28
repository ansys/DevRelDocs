---
category: logic
plugin: core
license: None
---

# logic:same string fields?

**Version: 0.0.0**

## Description

Takes two string fields and compares them.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_fieldA |[`string_field`](../../core-concepts/dpf-types.md#string-field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_fieldB |[`string_field`](../../core-concepts/dpf-types.md#string-field) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| are_identical |[`bool`](../../core-concepts/dpf-types.md#standard-types) |  |
|  **Pin 1**| information |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_string_fields

 **Full name**: logic.identical_string_fields

 **Internal name**: compare::string_field

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::string_field"); // operator instantiation
op.connect(0, my_string_fieldA);
op.connect(1, my_string_fieldB);
bool my_are_identical = op.getOutput<bool>(0);
std::string my_information = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_string_fields() # operator instantiation
op.inputs.string_fieldA.connect(my_string_fieldA)
op.inputs.string_fieldB.connect(my_string_fieldB)
my_are_identical = op.outputs.are_identical()
my_information = op.outputs.information()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_string_fields() # operator instantiation
op.inputs.string_fieldA.Connect(my_string_fieldA)
op.inputs.string_fieldB.Connect(my_string_fieldB)
my_are_identical = op.outputs.are_identical.GetData()
my_information = op.outputs.information.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.