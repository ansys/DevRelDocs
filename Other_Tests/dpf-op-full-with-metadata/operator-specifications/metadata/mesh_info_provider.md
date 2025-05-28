---
category: metadata
plugin: core
license: None
---

# metadata:mesh info provider

## Description

Reads the mesh information, such as number of elements (common property), number of faces (Cff plugins) or scoping of parts (LSDYNA plugins) on files contained in the streams or data sources.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`int32`](../../getting-started/using-data-containers.md#int32) | Optional time/frequency set ID of the mesh. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | streams (mesh file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | If the stream is null, retrieves the file path from the data sources. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mesh_info |[`generic_data_container`](../../getting-started/using-data-containers.md#generic-data-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

- Category: metadata
- Plugin: core
- Scripting name: mesh_info_provider
- Full name: metadata.mesh_info_provider
- Internal name: mesh_info_provider
- License: None
  