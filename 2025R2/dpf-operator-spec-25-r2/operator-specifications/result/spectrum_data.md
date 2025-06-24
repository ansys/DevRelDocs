---
category: result
plugin: mapdl
license: None
Version: 0.0.0
---

# result:spectrum data

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read participation factors from mode file.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../getting-started/using-data-containers.md#data-sources) | Data_sources (must contain at least one mode file). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| participation_factors |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | Fields container containing participation factors. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: mapdl

 **Scripting name**: None

 **Full name**: None

 **Internal name**: spectrum_data

 **License**: None
 
