---
category: logic
plugin: core
license: None
---

# logic:same scopings?

**Version: 0.0.0**

## Description

Check if two scopings are identical.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopingA |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopingB |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

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

 **Scripting name**: identical_scopings

 **Full name**: logic.identical_scopings

 **Internal name**: compare::scoping

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::scoping"); // operator instantiation
op.connect(0, my_scopingA);
op.connect(1, my_scopingB);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_scopings() # operator instantiation
op.inputs.scopingA.connect(my_scopingA)
op.inputs.scopingB.connect(my_scopingB)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_scopings() # operator instantiation
op.inputs.scopingA.Connect(my_scopingA)
op.inputs.scopingB.Connect(my_scopingB)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.