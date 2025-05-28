---
category: result
plugin: cgns
license: None
---

# result:cgns result provider

## Description

Read/compute names result from result streams.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  time_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output |
| <strong>Pin 1</strong>|  mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | nodes or elements scoping required in output. The scoping's location indicates whether nodes or elements are asked. Using scopings container enables to split the result fields container in domains |
| <strong>Pin 3</strong>|  streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | result file container allowed to be kept open to cache data |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | result file path container, used if no streams are set |
| <strong>Pin 17</strong>|  result_name |[`string`](../../getting-started/using-data-containers.md#string) | name of the result to read. By default the name of the operator is taken. |
| <strong>Pin 25</strong>|  region_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`int32`](../../getting-started/using-data-containers.md#int32) | Optional zone name/Id of the mesh. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Results |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: result

 **Plugin**: cgns

 **Scripting name**: cgns_result_provider

 **Full name**: result.cgns_result_provider

 **Internal name**: cgns::cgns::result_provider

 **License**: None
