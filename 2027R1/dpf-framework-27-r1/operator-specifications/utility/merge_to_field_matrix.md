---
category: utility
plugin: core
license: None
---

# utility:merge fields into field matrix

**Version: 0.0.0**

## Description

Assembles a set of fields into a field matrix.

## Inputs

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [fields](#input_0) |`vector<shared_ptr<field>>`, [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) |


<a id="input_0"></a>
### fields (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<field>>`, [`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container)

Either a fields container, a vector of fields to merge, or fields from pin 0 to ...


## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_field_matrix](#output_0) |[`field`](../../core-concepts/dpf-types.md#field) |


<a id="output_0"></a>
### merged_field_matrix (Pin 0)

- **Expected type(s):** [`field`](../../core-concepts/dpf-types.md#field)




## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_to_field_matrix

 **Full name**: utility.merge_to_field_matrix

 **Internal name**: merge::to_field_matrix

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::to_field_matrix"); // operator instantiation
op.connect(0, my_fields);
ansys::dpf::Field my_merged_field_matrix = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_to_field_matrix() # operator instantiation
op.inputs.fields1.connect(my_fields1)
op.inputs.fields2.connect(my_fields2)
my_merged_field_matrix = op.outputs.merged_field_matrix()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_to_field_matrix() # operator instantiation
op.inputs.fields.Connect(my_fields)
my_merged_field_matrix = op.outputs.merged_field_matrix.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.