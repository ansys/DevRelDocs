---
category: utility
plugin: core
license: None
---

# utility:extract sub scopings container

**Version: 0.0.0**

## Description

Creates a new scopings container with all the scopings corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [scopings_container](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |
| <strong>1</strong> | [label_space](#input_1) |  |[`label_space`](../../core-concepts/dpf-types.md#label-space), [`scoping`](../../core-concepts/dpf-types.md#scoping) |
| <strong>2</strong> | [collapse_labels](#input_2) |  |[`bool`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### scopings_container (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

scopings_container

<a id="input_1"></a>
### label_space (Pin 1)

- **Required:** No
- **Expected type(s):** [`label_space`](../../core-concepts/dpf-types.md#label-space), [`scoping`](../../core-concepts/dpf-types.md#scoping)

Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs)

<a id="input_2"></a>
### collapse_labels (Pin 2)

- **Required:** No
- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)

If set to true (default) the input label space (scoping location) is suppressed from the output scopings container, otherwise, label space is kept.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [scopings_container](#output_0) |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) |


<a id="output_0"></a>
### scopings_container (Pin 0)

- **Expected type(s):** [`scopings_container`](../../core-concepts/dpf-types.md#scopings-container)

scopings_container


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

 **Scripting name**: extract_sub_sc

 **Full name**: utility.extract_sub_sc

 **Internal name**: extract_sub_sc

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("extract_sub_sc"); // operator instantiation
op.connect(0, my_scopings_container);
op.connect(1, my_label_space);
op.connect(2, my_collapse_labels);
ansys::dpf::ScopingsContainer my_scopings_container = op.getOutput<ansys::dpf::ScopingsContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.extract_sub_sc() # operator instantiation
op.inputs.scopings_container.connect(my_scopings_container)
op.inputs.label_space.connect(my_label_space)
op.inputs.collapse_labels.connect(my_collapse_labels)
my_scopings_container = op.outputs.scopings_container()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.extract_sub_sc() # operator instantiation
op.inputs.scopings_container.Connect(my_scopings_container)
op.inputs.label_space.Connect(my_label_space)
op.inputs.collapse_labels.Connect(my_collapse_labels)
my_scopings_container = op.outputs.scopings_container.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.