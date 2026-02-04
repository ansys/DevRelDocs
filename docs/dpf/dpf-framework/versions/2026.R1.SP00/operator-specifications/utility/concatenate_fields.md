---
category: utility
plugin: core
license: None
---

# utility:concatenate fields

**Version: 0.0.0**

## Description

Concatenates fields into a unique one by incrementing the number of components.

Example:
- Field1 components: { UX, UY, UZ }
- Field2 components: { RX, RY, RZ }
- Output field : { UX, UY, UZ, RX, RY, RZ }

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin -3</strong>|  rescoping_value |[`double`](../../core-concepts/dpf-types.md#standard-types) | Value used to fill the missing values when scopings are different. Default is 0. |
| <strong>Pin -2</strong>|  reference_scoping_index |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Pin of the field of which to take the scoping for the output field.<br>If -1 all scopings will be merged, if -2 all scopings will be intersected. Default is -1 |
| <strong>Pin -1</strong>|  field_support |`abstract_field_support` | Support of the output field. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields |[`vector<field>`](../../core-concepts/dpf-types.md#vector<field>) | A vector of fields to merge from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_fields |[`field`](../../core-concepts/dpf-types.md#field) | Field which has as many components as the sum of all the input fields' numbers of components. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: concatenate_fields

 **Full name**: utility.concatenate_fields

 **Internal name**: merge::concatenate_fields

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::concatenate_fields"); // operator instantiation
op.connect(-3, my_rescoping_value);
op.connect(-2, my_reference_scoping_index);
op.connect(-1, my_field_support);
op.connect(0, my_fields);
ansys::dpf::Field my_merged_fields = op.getOutput<ansys::dpf::Field>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.concatenate_fields() # operator instantiation
op.inputs.rescoping_value.connect(my_rescoping_value)
op.inputs.reference_scoping_index.connect(my_reference_scoping_index)
op.inputs.field_support.connect(my_field_support)
op.inputs.fields1.connect(my_fields1)
op.inputs.fields2.connect(my_fields2)
my_merged_fields = op.outputs.merged_fields()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.concatenate_fields() # operator instantiation
op.inputs.rescoping_value.Connect(my_rescoping_value)
op.inputs.reference_scoping_index.Connect(my_reference_scoping_index)
op.inputs.field_support.Connect(my_field_support)
op.inputs.fields.Connect(my_fields)
my_merged_fields = op.outputs.merged_fields.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.