---
category: filter
plugin: core
license: None
---

# filter:filtering max over time workflow

**Version: 0.0.0**

## Description

Creates a filtering workflow that will filter results based on a threshold of a selected invariant.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [invariant_fc_operator](/docs/dpf/dpf-framework/operator-specifications/filter/filtering_max_over_time) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>1</strong> | [output_pin](/docs/dpf/dpf-framework/operator-specifications/filter/filtering_max_over_time) |  |[`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>2</strong> | [list_of_results](/docs/dpf/dpf-framework/operator-specifications/filter/filtering_max_over_time) |  |[`vector&lt;string&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |
| <strong>3</strong> | [threshold](/docs/dpf/dpf-framework/operator-specifications/filter/filtering_max_over_time) |  |[`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="input_0"></a>
### invariant_fc_operator (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc).

<a id="input_1"></a>
### output_pin (Pin 1)

- **Required:** No
- **Expected type(s):** [`int32`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Output pin of the invariant operator. Default = 0.

<a id="input_2"></a>
### list_of_results (Pin 2)

- **Required:** No
- **Expected type(s):** [`vector&lt;string&gt;`](/docs/dpf/dpf-framework/core-concepts/dpf-types), [`string`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

If no result is given, filter will be applied on Stresses and Strains

<a id="input_3"></a>
### threshold (Pin 3)

- **Required:** No
- **Expected type(s):** [`double`](/docs/dpf/dpf-framework/core-concepts/dpf-types)

Threshold from which the operator will filter.


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [workflow](/docs/dpf/dpf-framework/operator-specifications/filter/filtering_max_over_time) |[`workflow`](/docs/dpf/dpf-framework/core-concepts/dpf-types) |


<a id="output_0"></a>
### workflow (Pin 0)

- **Expected type(s):** [`workflow`](/docs/dpf/dpf-framework/core-concepts/dpf-types)




## Configurations

This operator supports [configuration options](/docs/dpf/dpf-framework/core-concepts/operator-configurations) that modify its behavior.


### [mutex](/docs/dpf/dpf-framework/core-concepts/operator-configurations)

- **Expected type(s):** [`bool`](/docs/dpf/dpf-framework/core-concepts/dpf-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: filter

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: filtering_max_over_time

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("filtering_max_over_time"); // operator instantiation
op.connect(0, my_invariant_fc_operator);
op.connect(1, my_output_pin);
op.connect(2, my_list_of_results);
op.connect(3, my_threshold);
ansys::dpf::Workflow my_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.filter.None() # operator instantiation
op.inputs.invariant_fc_operator.connect(my_invariant_fc_operator)
op.inputs.output_pin.connect(my_output_pin)
op.inputs.list_of_results.connect(my_list_of_results)
op.inputs.threshold.connect(my_threshold)
my_workflow = op.outputs.workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.filter.None() # operator instantiation
op.inputs.invariant_fc_operator.Connect(my_invariant_fc_operator)
op.inputs.output_pin.Connect(my_output_pin)
op.inputs.list_of_results.Connect(my_list_of_results)
op.inputs.threshold.Connect(my_threshold)
my_workflow = op.outputs.workflow.GetData()
```
</details>
<br />

## Changelog

- Version 0.0.0: Initial release.