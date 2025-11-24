---
category: utility
plugin: core
license: None
---

# utility:remote workflow instantiate

**Version: 0.0.0**

## Description

Sends a local workflow to a remote process (and keep a local image of it) or create a local image of an existing remote workflow (identified by an id and an address) for a given protocol registered in the streams.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  workflow_to_send |[`workflow`](../../core-concepts/dpf-types.md#workflow), [`int32`](../../core-concepts/dpf-types.md#standard-types) | local workflow to push to a remote or id of a remote workflow |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_to_remote |[`streams_container`](../../core-concepts/dpf-types.md#streams-container) |  |
| <strong>Pin 4</strong>|  data_sources_to_remote |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) |  |

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

 **Scripting name**: remote_workflow_instantiate

 **Full name**: utility.remote_workflow_instantiate

 **Internal name**: remote_workflow_instantiate

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("remote_workflow_instantiate"); // operator instantiation
op.connect(0, my_workflow_to_send);
op.connect(3, my_streams_to_remote);
op.connect(4, my_data_sources_to_remote);
ansys::dpf::Workflow my_remote_workflow = op.getOutput<ansys::dpf::Workflow>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.remote_workflow_instantiate() # operator instantiation
op.inputs.workflow_to_send.connect(my_workflow_to_send)
op.inputs.streams_to_remote.connect(my_streams_to_remote)
op.inputs.data_sources_to_remote.connect(my_data_sources_to_remote)
my_remote_workflow = op.outputs.remote_workflow()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.remote_workflow_instantiate() # operator instantiation
op.inputs.workflow_to_send.Connect(my_workflow_to_send)
op.inputs.streams_to_remote.Connect(my_streams_to_remote)
op.inputs.data_sources_to_remote.Connect(my_data_sources_to_remote)
my_remote_workflow = op.outputs.remote_workflow.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.