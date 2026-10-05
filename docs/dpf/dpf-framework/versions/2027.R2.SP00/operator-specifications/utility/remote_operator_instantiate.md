---
category: utility
plugin: core
license: None
---

# utility:remote operator instantiate

**Version: 0.0.0**

## Description

Create a local image of an existing remote operator (identified by an id and an address) for a given protocol registered in the streams. A workflow is created with this operator and returned in output

## Inputs

This table lists the input pins for this operator. Input pins define the data that the operator requires to perform its operation.
Some inputs are required, while others are optional and provide additional configuration.
Each parameter is detailed in the sections that follow the table.

| Pin number | Name | Status | Expected type(s) |
|------------|------|--------|------------------|
| <strong>0</strong> | [operator_to_send](#input_0) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1</strong> | [output_pin](#input_1) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>3</strong> | [streams_to_remote](#input_3) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |
| <strong>4</strong> | [data_sources_to_remote](#input_4) |  |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |
| <strong>5</strong> | [output_name](#input_5) |  <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;" title="This pin is required">Required</span>|[`string`](../../core-concepts/dpf-types.md#standard-types) |


<a id="input_0"></a>
### operator_to_send (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

local workflow to push to a remote or id of a remote workflow

<a id="input_1"></a>
### output_pin (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)

pin number of the output to name

<a id="input_3"></a>
### streams_to_remote (Pin 3)

- **Required:** Yes
- **Expected type(s):** [`streams_container`](../../core-concepts/dpf-types.md#streams-container)



<a id="input_4"></a>
### data_sources_to_remote (Pin 4)

- **Required:** No
- **Expected type(s):** [`data_sources`](../../core-concepts/dpf-types.md#data-sources)



<a id="input_5"></a>
### output_name (Pin 5)

- **Required:** Yes
- **Expected type(s):** [`string`](../../core-concepts/dpf-types.md#standard-types)

output's name of the workflow to return


## Outputs

This table lists the output pins for this operator.
Output pins provide the results of the operator's computation and can be connected to inputs of other operators or retrieved for further processing.
Each output is detailed in the sections that follow the table.

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [remote_workflow](#output_0) |[`workflow`](../../core-concepts/dpf-types.md#workflow) |


<a id="output_0"></a>
### remote_workflow (Pin 0)

- **Expected type(s):** [`workflow`](../../core-concepts/dpf-types.md#workflow)

remote workflow containing an image of the remote workflow and the protocols streams


## Configurations

This operator supports [configuration options](../../core-concepts/operator-configurations.md) that modify its behavior.


### [mutex](../../core-concepts/operator-configurations.md#mutex)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

### [num_threads](../../core-concepts/operator-configurations.md#num_threads)

- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** 0

Number of threads to use to run in parallel

### [run_in_parallel](../../core-concepts/operator-configurations.md#run_in_parallel)

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** true

Loops are allowed to run in parallel if the value of this config is set to true.



## Scripting

This operator can be accessed through scripting interfaces using these identifiers.

 **Category**: utility

 **Plugin**: core

 **Scripting name**: remote_operator_instantiate

 **Full name**: utility.remote_operator_instantiate

 **Internal name**: remote_operator_instantiate

 **License**: None

## Examples

These examples demonstrate how to use this operator in different programming environments.
Each example shows how to instantiate the operator, connect the required inputs, and retrieve the output.

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("remote_operator_instantiate"); // operator instantiation
op.connect(0, my_operator_to_send);
op.connect(1, my_output_pin);
op.connect(3, my_streams_to_remote);
op.connect(4, my_data_sources_to_remote);
op.connect(5, my_output_name);
ansys::dpf::Workflow my_remote_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.remote_operator_instantiate() # operator instantiation
op.inputs.operator_to_send.connect(my_operator_to_send)
op.inputs.output_pin.connect(my_output_pin)
op.inputs.streams_to_remote.connect(my_streams_to_remote)
op.inputs.data_sources_to_remote.connect(my_data_sources_to_remote)
op.inputs.output_name.connect(my_output_name)
my_remote_workflow = op.outputs.remote_workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.remote_operator_instantiate() # operator instantiation
op.inputs.operator_to_send.Connect(my_operator_to_send)
op.inputs.output_pin.Connect(my_output_pin)
op.inputs.streams_to_remote.Connect(my_streams_to_remote)
op.inputs.data_sources_to_remote.Connect(my_data_sources_to_remote)
op.inputs.output_name.Connect(my_output_name)
my_remote_workflow = op.outputs.remote_workflow.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.