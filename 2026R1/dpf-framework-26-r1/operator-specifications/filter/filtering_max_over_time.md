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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invariant_fc_operator |[`string`](../../core-concepts/dpf-types.md#standard-types) | Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc). |
| <strong>Pin 1</strong>|  output_pin |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Output pin of the invariant operator. Default = 0. |
| <strong>Pin 2</strong>|  list_of_results |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | If no result is given, filter will be applied on Stresses and Strains |
| <strong>Pin 3</strong>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Threshold from which the operator will filter. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: filtering_max_over_time

 **License**: None

## Examples

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
<br>

## Changelog

- Version 0.0.0: Initial release.