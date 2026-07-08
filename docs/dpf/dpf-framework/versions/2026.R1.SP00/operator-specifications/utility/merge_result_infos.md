---
category: utility
plugin: core
license: None
---

# utility:merge result infos

**Version: 0.0.0**

## Description

Assembles a set of result information into a unique one.

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [result_infos](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|`vector<shared_ptr<result_info>>`, [`result_info`](../../core-concepts/dpf-types.md#result-info) |


<a id="input_0"></a>
### result_infos (Pin 0)

- **Required:** Yes
- **Expected type(s):** `vector<shared_ptr<result_info>>`, [`result_info`](../../core-concepts/dpf-types.md#result-info)

A vector of result info containers to merge or result infos from pin 0 to ...


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [merged_result_infos](#output_0) |[`result_info`](../../core-concepts/dpf-types.md#result-info) |


<a id="output_0"></a>
### merged_result_infos (Pin 0)

- **Expected type(s):** [`result_info`](../../core-concepts/dpf-types.md#result-info)




## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [read_inputs_in_parallel](../../core-concepts/operator-configurations.md#read_inputs_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the operator's inputs will be evaluated in parallel.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_result_infos

 **Full name**: utility.merge_result_infos

 **Internal name**: merge::result_info

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("merge::result_info"); // operator instantiation
op.connect(0, my_result_infos);
ansys::dpf::ResultInfo my_merged_result_infos = op.getOutput<ansys::dpf::ResultInfo>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.merge_result_infos() # operator instantiation
op.inputs.result_infos1.connect(my_result_infos1)
op.inputs.result_infos2.connect(my_result_infos2)
my_merged_result_infos = op.outputs.merged_result_infos()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.merge_result_infos() # operator instantiation
op.inputs.result_infos.Connect(my_result_infos)
my_merged_result_infos = op.outputs.merged_result_infos.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.