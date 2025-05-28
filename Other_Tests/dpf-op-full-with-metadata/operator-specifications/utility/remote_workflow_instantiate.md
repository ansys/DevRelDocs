---
category: utility
plugin: core
license: None
---

# utility:remote workflow instantiate

## Description

Sends a local workflow to a remote process (and keep a local image of it) or create a local image of an existing remote workflow (identified by an id and an address) for a given protocol registered in the streams.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  workflow_to_send |[`workflow`](../../getting-started/using-data-containers.md#workflow), [`int32`](../../getting-started/using-data-containers.md#int32) | local workflow to push to a remote or id of a remote workflow |
| <strong>Pin 3</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  streams_to_remote |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) |  |
| <strong>Pin 4</strong>|  data_sources_to_remote |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| remote_workflow |[`workflow`](../../getting-started/using-data-containers.md#workflow) | remote workflow containing an image of the remote workflow and the protocols streams |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: remote_workflow_instantiate

 **Full name**: utility.remote_workflow_instantiate

 **Internal name**: remote_workflow_instantiate

 **License**: None
