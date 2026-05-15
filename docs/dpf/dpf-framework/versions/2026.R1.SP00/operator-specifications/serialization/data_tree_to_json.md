---
category: serialization
plugin: core
license: None
---

# serialization:data tree to json

**Version: 0.0.0**

## Description

Writes a json file or string from a DataTree

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [data_tree](#input_0) |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>1</strong>|  [path](#input_1) |[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### data_tree (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree)



<a id="input_1"></a>
### path (Pin 1)

- **Required:** No
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [data_sources](#output_0) |[`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="output_0"></a>
### data_sources (Pin 0)

- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources), [`string`](../../core-concepts/dpf-types.md#standard-types)




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

 **Internal name**: data_tree_to_json

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("data_tree_to_json"); // operator instantiation
op.connect(0, my_data_tree);
op.connect(1, my_path);
ansys::dpf::DataSources my_data_sources = op.getOutput<ansys::dpf::DataSources>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.data_tree.connect(my_data_tree)
op.inputs.path.connect(my_path)
my_data_sources_as_data_sources = op.outputs.data_sources_as_data_sources()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.serialization.None() # operator instantiation
op.inputs.data_tree.Connect(my_data_tree)
op.inputs.path.Connect(my_path)
my_data_sources = op.outputs.data_sources.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.