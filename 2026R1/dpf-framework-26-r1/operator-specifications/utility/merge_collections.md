---
category: utility
plugin: core
license: None
---

# utility:merge collections

**Version: 0.0.0**

## Description

Merges a set of collections into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  collections |`vector<shared_ptr<any_collection>>`, [`any_collection`](../../core-concepts/dpf-types.md#any-collection) | a vector of collections to merge or collections from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_collections |[`any_collection`](../../core-concepts/dpf-types.md#any-collection) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_collections

 **Full name**: utility.merge_collections

 **Internal name**: merge::any_collection

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::any_collection"); // operator instantiation
op.connect(0, my_collections);
ansys::dpf::AnyCollection my_merged_collections = op.getOutput<ansys::dpf::AnyCollection>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_collections() # operator instantiation
op.inputs.collections1.connect(my_collections1)
op.inputs.collections2.connect(my_collections2)
my_merged_collections = op.outputs.merged_collections()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_collections() # operator instantiation
op.inputs.collections.Connect(my_collections)
my_merged_collections = op.outputs.merged_collections.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.