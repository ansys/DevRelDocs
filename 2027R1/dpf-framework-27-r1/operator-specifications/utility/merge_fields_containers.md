---
category: utility
plugin: core
license: None
---

# utility:merge fields containers

**Version: 0.0.0**

## Description

Assembles a set of fields containers into a unique one.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>-200</strong>|  [should_merge_named_selections](#input_-200) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-3</strong>|  [sum_merge](#input_-3) |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>-2</strong>|  [merged_fields_support](#input_-2) |`abstract_field_support` |
| <strong>-1</strong>|  [merged_fields_containers_support](#input_-1) |`abstract_field_support`, `umap<string,shared_ptr<abstract_field_support>>` |
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields_containers](#input_0) |`vector<shared_ptr<fields_container>>`, [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_-200"></a>
### should_merge_named_selections (Pin -200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

<a id="input_-3"></a>
### sum_merge (Pin -3)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

Default is false. If true, redundant quantities are summed instead of being ignored.

<a id="input_-2"></a>
### merged_fields_support (Pin -2)

- **Required:** No
- **Expected type(s):** `abstract_field_support`

Already merged field support.

<a id="input_-1"></a>
### merged_fields_containers_support (Pin -1)

- **Required:** No
- **Expected type(s):** `abstract_field_support`, `umap<string,shared_ptr<abstract_field_support>>`

Already merged fields containers support.

<a id="input_0"></a>
### fields_containers (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<fields_container>>`, [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

A vector of fields containers to merge or fields containers from pin 0 to ...


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_fields_container](#output_0) |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="output_0"></a>
### merged_fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](../../core-concepts/dpf-types.md#fields-container)




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

 **Scripting name**: merge_fields_containers

 **Full name**: utility.merge_fields_containers

 **Internal name**: merge::fields_container

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::fields_container"); // operator instantiation
op.connect(-200, my_should_merge_named_selections);
op.connect(-3, my_sum_merge);
op.connect(-2, my_merged_fields_support);
op.connect(-1, my_merged_fields_containers_support);
op.connect(0, my_fields_containers);
ansys::dpf::FieldsContainer my_merged_fields_container = op.getOutput<ansys::dpf::FieldsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_fields_containers() # operator instantiation
op.inputs.should_merge_named_selections.connect(my_should_merge_named_selections)
op.inputs.sum_merge.connect(my_sum_merge)
op.inputs.merged_fields_support.connect(my_merged_fields_support)
op.inputs.merged_fields_containers_support.connect(my_merged_fields_containers_support)
op.inputs.fields_containers1.connect(my_fields_containers1)
op.inputs.fields_containers2.connect(my_fields_containers2)
my_merged_fields_container = op.outputs.merged_fields_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_fields_containers() # operator instantiation
op.inputs.should_merge_named_selections.Connect(my_should_merge_named_selections)
op.inputs.sum_merge.Connect(my_sum_merge)
op.inputs.merged_fields_support.Connect(my_merged_fields_support)
op.inputs.merged_fields_containers_support.Connect(my_merged_fields_containers_support)
op.inputs.fields_containers.Connect(my_fields_containers)
my_merged_fields_container = op.outputs.merged_fields_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.