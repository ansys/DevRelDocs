---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:splitter::data_sources

## Description

Splits a Data Sources into multiple coherent data sources, actual number of outputs is always less or equal to the given desired number of ouputs.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Data sources to split. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_count |[`int32`](../../getting-started/using-data-containers.md#int32) | Number of desired outputs. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin -1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | output_count |[`int32`](../../getting-started/using-data-containers.md#int32) | Actual number of outputs. |
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | outputs |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Data sources outputs. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: logic
- Plugin: core
- Scripting name: splitter::data_sources
- Full name: logic.splitter::data_sources
- Internal name: splitter::data_sources
- License: any_dpf_supported_increments
  