---
category: serialization
plugin: core
license: None
---

# serialization:txt to data tree

**Version: 0.0.0**

## Description

Reads a txt file or string to a DataTree

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  string_or_path |[`string`](../../core-concepts/dpf-types.md#standard-types), [`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| data_tree |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: txt_to_data_tree

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("txt_to_data_tree"); // operator instantiation
op.connect(0, my_string_or_path);
ansys::dpf::AbstractDataTree my_data_tree = op.getOutput<ansys::dpf::AbstractDataTree>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.string_or_path.connect(my_string_or_path)
my_data_tree = op.outputs.data_tree()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.string_or_path.Connect(my_string_or_path)
my_data_tree = op.outputs.data_tree.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.