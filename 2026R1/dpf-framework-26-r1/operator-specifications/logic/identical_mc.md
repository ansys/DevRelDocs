---
category: logic
plugin: core
license: None
---

# logic:same meshes container?

**Version: 0.0.0**

## Description

Checks if two meshes_container are identical.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes_containerA |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes_containerB |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |
| <strong>Pin 2</strong>|  small_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14). |
| <strong>Pin 3</strong>|  tolerance |[`double`](../../core-concepts/dpf-types.md#standard-types) | Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical (v1-v2)/v2 < relativeTol (default is 0.001). |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  compare_auxiliary |[`bool`](../../core-concepts/dpf-types.md#standard-types) | compare auxiliary data (i.e property fields, scopings...). Default value is 'false'. |

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

 **Scripting name**: identical_mc

 **Full name**: logic.identical_mc

 **Internal name**: compare::meshes_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::meshes_container"); // operator instantiation
op.connect(0, my_meshes_containerA);
op.connect(1, my_meshes_containerB);
op.connect(2, my_small_value);
op.connect(3, my_tolerance);
op.connect(4, my_compare_auxiliary);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_mc() # operator instantiation
op.inputs.meshes_containerA.connect(my_meshes_containerA)
op.inputs.meshes_containerB.connect(my_meshes_containerB)
op.inputs.small_value.connect(my_small_value)
op.inputs.tolerance.connect(my_tolerance)
op.inputs.compare_auxiliary.connect(my_compare_auxiliary)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_mc() # operator instantiation
op.inputs.meshes_containerA.Connect(my_meshes_containerA)
op.inputs.meshes_containerB.Connect(my_meshes_containerB)
op.inputs.small_value.Connect(my_small_value)
op.inputs.tolerance.Connect(my_tolerance)
op.inputs.compare_auxiliary.Connect(my_compare_auxiliary)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.