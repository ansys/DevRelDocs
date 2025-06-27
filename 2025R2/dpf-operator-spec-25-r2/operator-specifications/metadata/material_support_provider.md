---
category: metadata
plugin: core
license: None
Version: 0.0.0
---

# metadata:material support provider

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Reads the material support.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](./../../core-concepts/dpf-types#streams-container) | Streams result file container (optional). |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../core-concepts/dpf-types#data-sources) | if the stream is null, get the file path from the data sources. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| abstract_field_support |[`abstract_field_support`](./../../core-concepts/dpf-types#abstract-field-support) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](./../../core-concepts/dpf-types#standard-types) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](./../../core-concepts/dpf-types#standard-types) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: material_support_provider

 **Full name**: metadata.material_support_provider

 **Internal name**: mat_support_provider

 **License**: None
 
