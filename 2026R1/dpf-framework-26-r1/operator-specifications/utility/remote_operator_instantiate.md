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

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  operator_to_send |[`int32`](../../core-concepts/dpf-types.md#standard-types) | local workflow to push to a remote or id of a remote workflow |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_pin |[`int32`](../../core-concepts/dpf-types.md#standard-types) | pin number of the output to name |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_to_remote |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong>|  data_sources_to_remote |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |
| <strong>Pin 5</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | output's name of the workflow to return |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| remote_workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) | remote workflow containing an image of the remote workflow and the protocols streams |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: remote_operator_instantiate

 **Full name**: utility.remote_operator_instantiate

 **Internal name**: remote_operator_instantiate

 **License**: None

## Examples

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