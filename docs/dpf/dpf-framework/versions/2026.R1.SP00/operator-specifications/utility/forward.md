---
category: utility
plugin: core
license: None
---

# utility:forward

**Version: 0.0.0**

## Description

Return all the inputs as outputs.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [any](#input_0) |[`any`](../../core-concepts/dpf-types.md#any) |


<a id="input_0"></a>
### any (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)

any type of input


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [any](#output_0) |[`any`](../../core-concepts/dpf-types.md#any) |


<a id="output_0"></a>
### any (Pin 0)

- **Expected type(s):** [`any`](../../core-concepts/dpf-types.md#any)

same types as inputs


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### read_inputs_in_parallel

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: forward

 **Full name**: utility.forward

 **Internal name**: forward

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("forward"); // operator instantiation
op.connect(0, my_any);
ansys::dpf::Any my_any = op.getOutput<ansys::dpf::Any>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.forward() # operator instantiation
op.inputs.any.connect(my_any)
my_any = op.outputs.any()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.forward() # operator instantiation
op.inputs.any.Connect(my_any)
my_any = op.outputs.any.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.