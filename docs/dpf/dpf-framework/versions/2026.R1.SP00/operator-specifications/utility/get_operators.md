---
category: utility
plugin: core
license: None
---

# utility:get operators

**Version: 0.0.0**

## Description

Getter on operators inside a workflow.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [workflow](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`workflow`](../../core-concepts/dpf-types.md#workflow) |


<a id="input_0"></a>
### workflow (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow)




## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [operators](#output_0) |[`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container) |


<a id="output_0"></a>
### operators (Pin 0)

- **Expected type(s):** [`generic_data_container`](../../core-concepts/dpf-types.md#generic-data-container)




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

 **Scripting name**: get_operators

 **Full name**: utility.get_operators

 **Internal name**: workflow::get_operators

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("workflow::get_operators"); // operator instantiation
op.connect(0, my_workflow);
ansys::dpf::GenericDataContainer my_operators = op.getOutput<ansys::dpf::GenericDataContainer>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.get_operators() # operator instantiation
op.inputs.workflow.connect(my_workflow)
my_operators = op.outputs.operators()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.get_operators() # operator instantiation
op.inputs.workflow.Connect(my_workflow)
my_operators = op.outputs.operators.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.