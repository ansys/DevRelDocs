---
category: serialization
plugin: core
license: None
---

# serialization:workflow to pydpf

**Version: 0.0.0**

## Description

Generates a PyDPF script that can recreate the given workflow.
The script is returned as a string, and can optionally be saved to a specified path.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [workflow](#input_0) |[`workflow`](../../core-concepts/dpf-types.md#workflow) |
| <strong>1</strong>|  [output_path](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### workflow (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow)



<a id="input_1"></a>
### output_path (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [pydpf_code](#output_0) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### pydpf_code (Pin 0)

- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: workflow_to_pydpf

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow_to_pydpf"); // operator instantiation
op.connect(0, my_workflow);
op.connect(1, my_output_path);
std::string my_pydpf_code = op.getOutput<std::string>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow.connect(my_workflow)
op.inputs.output_path.connect(my_output_path)
my_pydpf_code = op.outputs.pydpf_code()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.workflow.Connect(my_workflow)
op.inputs.output_path.Connect(my_output_path)
my_pydpf_code = op.outputs.pydpf_code.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.