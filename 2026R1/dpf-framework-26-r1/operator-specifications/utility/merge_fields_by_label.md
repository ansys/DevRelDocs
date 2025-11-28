---
category: utility
plugin: core
license: None
---

# utility:merge fields by label

**Version: 0.0.0**

## Description

Merges the fields of a fields container that share the same label value.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  label |[`string`](../../core-concepts/dpf-types.md#standard-types) | Label identifier that should be merged. |
| <strong>Pin 2</strong>|  merged_field_support |`abstract_field_support` | The FieldsContainer's support that has already been merged. |
| <strong>Pin 3</strong>|  sum_merge |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Default is false. If true, redundant quantities are summed instead of being ignored. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
|  **Pin 1**| merged_field_support |`abstract_field_support` |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_fields_by_label

 **Full name**: utility.merge_fields_by_label

 **Internal name**: merge::fields_container_label

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::fields_container_label"); // operator instantiation
op.connect(0, my_fields_container);
op.connect(1, my_label);
op.connect(2, my_merged_field_support);
op.connect(3, my_sum_merge);
ansys::dpf::FieldsContainer my_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
ansys::dpf::AbstractFieldSupport my_merged_field_support = op.getOutput<ansys::dpf::AbstractFieldSupport>(1);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_fields_by_label() # operator instantiation
op.inputs.fields_container.connect(my_fields_container)
op.inputs.label.connect(my_label)
op.inputs.merged_field_support.connect(my_merged_field_support)
op.inputs.sum_merge.connect(my_sum_merge)
my_fields_container = op.outputs.fields_container()
my_merged_field_support = op.outputs.merged_field_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_fields_by_label() # operator instantiation
op.inputs.fields_container.Connect(my_fields_container)
op.inputs.label.Connect(my_label)
op.inputs.merged_field_support.Connect(my_merged_field_support)
op.inputs.sum_merge.Connect(my_sum_merge)
my_fields_container = op.outputs.fields_container.GetData()
my_merged_field_support = op.outputs.merged_field_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.