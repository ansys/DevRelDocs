---
category: logic
plugin: core
license: None
---

# logic:same scopings container?

**Version: 0.0.0**

## Description

Checks if two scopings_container are identical.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [scopings_containerA](#input_0) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [scopings_containerB](#input_1) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="input_0"></a>
### scopings_containerA (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)



<a id="input_1"></a>
### scopings_containerB (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [boolean](#output_0) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
|  **1**| [message](#output_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### boolean (Pin 0)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

bool (true if identical...)

<a id="output_1"></a>
### message (Pin 1)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: identical_sc

 **Full name**: logic.identical_sc

 **Internal name**: compare::scopings_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("compare::scopings_container"); // operator instantiation
op.connect(0, my_scopings_containerA);
op.connect(1, my_scopings_containerB);
bool my_boolean = op.getOutput<bool>(0);
std::string my_message = op.getOutput<std::string>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.logic.identical_sc() # operator instantiation
op.inputs.scopings_containerA.connect(my_scopings_containerA)
op.inputs.scopings_containerB.connect(my_scopings_containerB)
my_boolean = op.outputs.boolean()
my_message = op.outputs.message()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.logic.identical_sc() # operator instantiation
op.inputs.scopings_containerA.Connect(my_scopings_containerA)
op.inputs.scopings_containerB.Connect(my_scopings_containerB)
my_boolean = op.outputs.boolean.GetData()
my_message = op.outputs.message.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.