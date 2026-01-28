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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |
| <strong>Pin 1</strong>|  output_path |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| pydpf_code |[`string`](../../core-concepts/dpf-types.md#standard-types) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

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