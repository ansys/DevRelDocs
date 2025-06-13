---
category: metadata
plugin: core
license: None
Version: 0.0.0
---

# metadata:mesh selection manager provider

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Reads mesh properties from the results files contained in the streams or data sources, and makes those properties available through a mesh selection manager in output.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](./../../getting-started/using-data-containers.md#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../getting-started/using-data-containers.md#data-sources) | If the stream is null, retrieves the file path from the data sources. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh_selection_manager |[`mesh_selection_manager`](./../../getting-started/using-data-containers.md#mesh-selection-manager) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](./../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: mesh_selection_manager_provider

 **Full name**: metadata.mesh_selection_manager_provider

 **Internal name**: MeshSelectionManagerProvider

 **License**: None
 
