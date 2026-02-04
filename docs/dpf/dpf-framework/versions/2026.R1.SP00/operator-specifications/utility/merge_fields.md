---
category: utility
plugin: core
license: None
---

# utility:merge fields

**Version: 0.0.0**

## Description

Assembles a set of fields into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -2</strong>|  sum_merge |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false. If true, redundant quantities are summed instead of being ignored. |
| <strong>Pin -1</strong>|  merged_support |`abstract_field_support` | Already merged field support. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |`vector<shared_ptr<field>>`, [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | Either a fields container, a vector of fields to merge, or fields from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_field |[`field`](../../core-concepts/dpf-types.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_fields

 **Full name**: utility.merge_fields

 **Internal name**: merge::field

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::field"); // operator instantiation
op.connect(-2, my_sum_merge);
op.connect(-1, my_merged_support);
op.connect(0, my_fields);
ansys::dpf::Field my_merged_field = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_fields() # operator instantiation
op.inputs.sum_merge.connect(my_sum_merge)
op.inputs.merged_support.connect(my_merged_support)
op.inputs.fields1.connect(my_fields1)
op.inputs.fields2.connect(my_fields2)
my_merged_field = op.outputs.merged_field()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_fields() # operator instantiation
op.inputs.sum_merge.Connect(my_sum_merge)
op.inputs.merged_support.Connect(my_merged_support)
op.inputs.fields.Connect(my_fields)
my_merged_field = op.outputs.merged_field.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.