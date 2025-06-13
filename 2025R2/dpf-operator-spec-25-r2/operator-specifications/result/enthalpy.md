---
category: result
plugin: core
license: None
Version: 0.0.0
---

# result:enthalpy

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Read Enthalpy by calling the readers defined by the datasources.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping), [`int32`](./../../getting-started/using-data-containers.md#int32), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>), [`double`](./../../getting-started/using-data-containers.md#double), [`field`](./../../getting-started/using-data-containers.md#field), [`vector<double>`](./../../getting-started/using-data-containers.md#vector<double>) | time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files. |
| <strong>Pin 1</strong>|  mesh_scoping |[`scopings_container`](./../../getting-started/using-data-containers.md#scopings-container), [`scoping`](./../../getting-started/using-data-containers.md#scoping) | nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](./../../getting-started/using-data-containers.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../getting-started/using-data-containers.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](./../../getting-started/using-data-containers.md#meshes-container) | prevents from reading the mesh in the result files |
| <strong>Pin 25</strong>|  region_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping), [`int32`](./../../getting-started/using-data-containers.md#int32), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>) | region id (integer) or vector of region ids (vector) or region scoping (scoping) of the model (region corresponds to zone for Fluid results or part for LSDyna results). |
| <strong>Pin 1000</strong>|  qualifiers |[`label_space`](./../../getting-started/using-data-containers.md#label-space) | (for Fluid results only) LabelSpace with combination of zone, phases or species ids |


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

 **Scripting name**: enthalpy

 **Full name**: result.enthalpy

 **Internal name**: H_S

 **License**: None
 
