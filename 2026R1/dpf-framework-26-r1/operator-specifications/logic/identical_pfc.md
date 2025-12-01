---
category: logic
plugin: core
license: None
---

# logic:same  property fields container?

**Version: 0.0.0**

## Description

Checks if two property_fields_container are identical.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fields_containerA |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_fields_containerB |[`property_fields_container`](../../core-concepts/dpf-types.md#property-fields-container) |  |

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

 **Scripting name**: identical_pfc

 **Full name**: logic.identical_pfc

 **Internal name**: compare::property_fields_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::property_fields_container"); // operator instantiation
op.connect(0, my_property_fields_containerA);
op.connect(1, my_property_fields_containerB);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_pfc() # operator instantiation
op.inputs.property_fields_containerA.connect(my_property_fields_containerA)
op.inputs.property_fields_containerB.connect(my_property_fields_containerB)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_pfc() # operator instantiation
op.inputs.property_fields_containerA.Connect(my_property_fields_containerA)
op.inputs.property_fields_containerB.Connect(my_property_fields_containerB)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.