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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>-2</strong>|  [sum_merge](#input_-2) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-1</strong>|  [merged_support](#input_-1) |`abstract_field_support` |
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields](#input_0) |`vector<shared_ptr<field>>`, [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_-2"></a>
### sum_merge (Pin -2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Default is false. If true, redundant quantities are summed instead of being ignored.

<a id="input_-1"></a>
### merged_support (Pin -1)

- **Required:** No
- **Expected type(s):** `abstract_field_support`

Already merged field support.

<a id="input_0"></a>
### fields (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<field>>`, [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_field](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### merged_field (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




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