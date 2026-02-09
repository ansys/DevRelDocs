---
category: utility
plugin: core
license: None
---

# utility:delegate to operator

**Version: 0.0.0**

## Description

Delegate the run to an Operator instantiated by the name in input (forwards all the input of this Operator to the sub Operator).

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>-1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [operator_name](#input_-1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_-1"></a>
### operator_name (Pin -1)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [any](#output_0) |[`any`](../../core-concepts/dpf-types.md#any) |


<a id="output_0"></a>
### any (Pin 0)

- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)

inputs


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: delegate_to_operator

 **Full name**: utility.delegate_to_operator

 **Internal name**: delegate_to_operator

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("delegate_to_operator"); // operator instantiation
op.connect(-1, my_operator_name);
ansys::dpf::Any my_any = op.getOutput<ansys::dpf::Any>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.delegate_to_operator() # operator instantiation
op.inputs.operator_name.connect(my_operator_name)
my_any = op.outputs.any()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.delegate_to_operator() # operator instantiation
op.inputs.operator_name.Connect(my_operator_name)
my_any = op.outputs.any.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.