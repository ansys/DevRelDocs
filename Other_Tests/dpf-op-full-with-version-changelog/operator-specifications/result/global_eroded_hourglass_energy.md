---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:global eroded hourglass energy (LSDyna)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read Global Eroded Hourglass Energy (LSDyna) by calling the readers defined by the datasources.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 50</strong>|  unit_system |[`int32`](../../getting-started/using-data-containers.md#int32), [`string`](../../getting-started/using-data-containers.md#string), [`class dataProcessing::unit::CUnitSystem`](../../getting-started/using-data-containers.md#class-dataprocessing::unit::cunitsystem) | Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: global_eroded_hourglass_energy

 **Full name**: result.global_eroded_hourglass_energy

 **Internal name**: GLOB_ENG_ERAHO

 **License**: None
 
