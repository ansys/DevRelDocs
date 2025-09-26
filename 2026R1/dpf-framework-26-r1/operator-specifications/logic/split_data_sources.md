---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:splitter::data_sources

**Version: 0.0.0**

## Description

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources to split. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_count |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Number of desired outputs. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin -1**| output_count |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Actual number of outputs. |
|  **Pin 0**| outputs |[`data_sources`](../../core-concepts/dpf-types.md#data-sources) | Data sources outputs. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: split_data_sources

 **Full name**: logic.split_data_sources

 **Internal name**: splitter::data_sources

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.