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

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [fields_container](/docs/dpf/dpf-framework/operator-specifications/utility/merge_fields_by_label) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [label](/docs/dpf/dpf-framework/operator-specifications/utility/merge_fields_by_label) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [merged_field_support](/docs/dpf/dpf-framework/operator-specifications/utility/merge_fields_by_label) |  |`abstract_field_support` |
| <strong>3</strong> | [sum_merge](/docs/dpf/dpf-framework/operator-specifications/utility/merge_fields_by_label) |  |[`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### fields_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="input_1"></a>
### label (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Label identifier that should be merged.

<a id="input_2"></a>
### merged_field_support (Pin 2)

- **Required:** No
- **Expected type(s):** `abstract_field_support`

The FieldsContainer's support that has already been merged.

<a id="input_3"></a>
### sum_merge (Pin 3)

- **Required:** No
- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Default is false. If true, redundant quantities are summed instead of being ignored.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [fields_container](/docs/dpf/dpf-framework/operator-specifications/utility/merge_fields_by_label) |[`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
|  **1**| [merged_field_support](/docs/dpf/dpf-framework/operator-specifications/utility/merge_fields_by_label) |`abstract_field_support` |


<a id="output_0"></a>
### fields_container (Pin 0)

- **Expected type(s):** [`fields_container`](/docs/dpf/dpf-framework/core-concepts/dpf-types)



<a id="output_1"></a>
### merged_field_support (Pin 1)

- **Expected type(s):** `abstract_field_support`




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_fields_by_label

 **Full name**: utility.merge_fields_by_label

 **Internal name**: merge::fields_container_label

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

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
<br />

## Changelog

- Version 0.0.0: Initial release.