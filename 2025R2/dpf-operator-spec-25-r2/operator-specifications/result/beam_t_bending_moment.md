---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:beam T bending moment (LSDyna)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read Beam T Bending Moment (LSDyna) by calling the readers defined by the datasources.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping), [`int32`](./../../getting-started/using-data-containers.md#int32), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>), [`double`](./../../getting-started/using-data-containers.md#double), [`field`](./../../getting-started/using-data-containers.md#field), [`vector<double>`](./../../getting-started/using-data-containers.md#vector<double>) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](./../../getting-started/using-data-containers.md#scopings-container), [`scoping`](./../../getting-started/using-data-containers.md#scoping) | elements scoping required in output. |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](./../../getting-started/using-data-containers.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../getting-started/using-data-containers.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 50</strong>|  unit_system |[`int32`](./../../getting-started/using-data-containers.md#int32), [`string`](./../../getting-started/using-data-containers.md#string), [`class dataProcessing::unit::CUnitSystem`](./../../getting-started/using-data-containers.md#class-dataprocessing::unit::cunitsystem) | Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: core

 **Scripting name**: beam_t_bending_moment

 **Full name**: result.beam_t_bending_moment

 **Internal name**: B_M2

 **License**: None
 
