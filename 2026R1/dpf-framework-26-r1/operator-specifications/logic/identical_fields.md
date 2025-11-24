---
category: logic
plugin: core
license: None
---

# logic:same fields?

**Version: 0.0.0**

## Description

Check if two fields are identical.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldA |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fieldB |[`field`](../../core-concepts/dpf-types.md#field) |  |
| <strong>Pin 2</strong>|  double_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double positive small value. Smallest value considered during the comparison step. All the absolute values in the field less than this value are considered null, (default value: 1.0e-14). |
| <strong>Pin 3</strong>|  double_tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical. Formula is (v1 - v2) / v2 < relativeTol. Default is 0.001. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| boolean |[`bool`](../../core-concepts/dpf-types.md#standard-types) | bool (true if identical...) |
|  **Pin 1**| message |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_fields

 **Full name**: logic.identical_fields

 **Internal name**: AreFieldsIdentical

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("AreFieldsIdentical"); // operator instantiation
op.connect(0, my_fieldA);
op.connect(1, my_fieldB);
op.connect(2, my_double_value);
op.connect(3, my_double_tolerance);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_fields() # operator instantiation
op.inputs.fieldA.connect(my_fieldA)
op.inputs.fieldB.connect(my_fieldB)
op.inputs.double_value.connect(my_double_value)
op.inputs.double_tolerance.connect(my_double_tolerance)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_fields() # operator instantiation
op.inputs.fieldA.Connect(my_fieldA)
op.inputs.fieldB.Connect(my_fieldB)
op.inputs.double_value.Connect(my_double_value)
op.inputs.double_tolerance.Connect(my_double_tolerance)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.