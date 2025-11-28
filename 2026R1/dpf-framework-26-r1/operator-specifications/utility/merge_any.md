---
category: utility
plugin: core
license: None
---

# utility:merge any objects

**Version: 0.0.0**

## Description

Merges a list of objects having the same data types. Once the data type is found, the merge operation is forwarded to the correct merge Operator.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  any |[`any`](../../core-concepts/dpf-types.md#any) | Either a vector of objects (sharing the same data types) or objects from pin 0 to ... to merge. Supported types rely on existing type specific merge operators. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| any |[`any`](../../core-concepts/dpf-types.md#any) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_any

 **Full name**: utility.merge_any

 **Internal name**: merge::any

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::any"); // operator instantiation
op.connect(0, my_any);
ansys::dpf::Any my_any = op.getOutput<ansys::dpf::Any>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_any() # operator instantiation
op.inputs.any1.connect(my_any1)
op.inputs.any2.connect(my_any2)
my_any = op.outputs.any()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_any() # operator instantiation
op.inputs.any.Connect(my_any)
my_any = op.outputs.any.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.