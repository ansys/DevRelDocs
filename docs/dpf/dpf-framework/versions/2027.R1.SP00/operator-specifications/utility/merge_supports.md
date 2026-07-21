---
category: utility
plugin: core
license: None
---

# utility:merge supports

**Version: 0.0.0**

## Description

Assembles a set of supports into a unique one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>-200</strong> | [should_merge_named_selections](#input_-200) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>0</strong> | [supports](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<abstract_field_support>>`, `abstract_field_support` |


<a id="input_-200"></a>
### should_merge_named_selections (Pin -200)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

For some result files (such as RST), the scoping on names selection is duplicated through all the distributed files.If this pin is false, the merging process is skipped. If it is true, this scoping is merged. Default is true.

<a id="input_0"></a>
### supports (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<abstract_field_support>>`, `abstract_field_support`

A vector of supports to merge or supports from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_support](#output_0) |`abstract_field_support` |


<a id="output_0"></a>
### merged_support (Pin 0)

- **Expected type(s):** `abstract_field_support`




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_supports

 **Full name**: utility.merge_supports

 **Internal name**: merge::abstract_support

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::abstract_support"); // operator instantiation
op.connect(-200, my_should_merge_named_selections);
op.connect(0, my_supports);
ansys::dpf::AbstractFieldSupport my_merged_support = op.getOutput<ansys::dpf::AbstractFieldSupport>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_supports() # operator instantiation
op.inputs.should_merge_named_selections.connect(my_should_merge_named_selections)
op.inputs.supports1.connect(my_supports1)
op.inputs.supports2.connect(my_supports2)
my_merged_support = op.outputs.merged_support()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_supports() # operator instantiation
op.inputs.should_merge_named_selections.Connect(my_should_merge_named_selections)
op.inputs.supports.Connect(my_supports)
my_merged_support = op.outputs.merged_support.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.