---
category: metadata
plugin: core
license: None
Version: 0.0.0
---

# metadata:cyclic analysis?

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Reads if the model is cyclic from the result file.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../core-concepts/dpf-types#streams-container) | streams (result file container) (optional) |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types#data-sources) | If the stream is null, retrieves the file path from the data sources. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| file_path |[`string`](../../core-concepts/dpf-types#standard-types) | returns 'single_stage' or 'multi_stage' or an empty string for non cyclic model |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: is_cyclic

 **Full name**: metadata.is_cyclic

 **Internal name**: is_cyclic

 **License**: None
 
