---
category: logic
plugin: core
license: None
---

# logic:same property fields?

**Version: 0.0.0**

## Description

Takes two property fields and compares them.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fieldA |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fieldB |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

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

 **Scripting name**: identical_property_fields

 **Full name**: logic.identical_property_fields

 **Internal name**: compare::property_field

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::property_field"); // operator instantiation
op.connect(0, my_property_fieldA);
op.connect(1, my_property_fieldB);
bool my_are_identical = op.getOutput<bool>(0);
std::string my_information = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_property_fields() # operator instantiation
op.inputs.property_fieldA.connect(my_property_fieldA)
op.inputs.property_fieldB.connect(my_property_fieldB)
my_are_identical = op.outputs.are_identical()
my_information = op.outputs.information()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_property_fields() # operator instantiation
op.inputs.property_fieldA.Connect(my_property_fieldA)
op.inputs.property_fieldB.Connect(my_property_fieldB)
my_are_identical = op.outputs.are_identical.GetData()
my_information = op.outputs.information.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.