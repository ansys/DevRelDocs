---
category: utility
plugin: core
license: None
---

# utility:merge data tree

**Version: 0.0.0**

## Description

Merges a list of data trees. Attributes names shouldn't be shared accross data tree instances.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_tree |[`data_tree`](../../core-concepts/dpf-types.md#data-tree), `vector<shared_ptr<data_tree>>` | Either a vector of data trees or data trees from pin 0 to ... to merge. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| any |[`any`](../../core-concepts/dpf-types.md#any) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **permissive** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_data_tree

 **Full name**: utility.merge_data_tree

 **Internal name**: merge::data_tree

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::data_tree"); // operator instantiation
op.connect(0, my_data_tree);
ansys::dpf::Any my_any = op.getOutput<ansys::dpf::Any>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_data_tree() # operator instantiation
op.inputs.data_tree1.connect(my_data_tree1)
op.inputs.data_tree2.connect(my_data_tree2)
my_any = op.outputs.any()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_data_tree() # operator instantiation
op.inputs.data_tree.Connect(my_data_tree)
my_any = op.outputs.any.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.