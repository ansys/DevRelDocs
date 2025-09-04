---
category: metadata
plugin: core
license: None
---

# metadata:result info provider

**Version: 0.0.0**

## Description

Reads the result information, such as available results or unit systems from the results files contained in the streams or data sources.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](./../../core-concepts/dpf-types.md#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../core-concepts/dpf-types.md#data-sources) | If the stream is null, retrieves the file path from the data sources. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| result_info |[`result_info`](./../../core-concepts/dpf-types.md#result-info) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../core-concepts/dpf-types.md#standard-types) | 0 | Number of threads to use to run in parallel |
| **permissive** |[`bool`](./../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |
| **run_in_parallel** |[`bool`](./../../core-concepts/dpf-types.md#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: result_info_provider

 **Full name**: metadata.result_info_provider

 **Internal name**: result_info_provider

 **License**: None


## Changelog

- Version 0.0.0: Initial release.