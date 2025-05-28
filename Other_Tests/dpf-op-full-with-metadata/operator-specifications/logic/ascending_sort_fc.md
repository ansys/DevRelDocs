---
category: logic
plugin: core
license: any_dpf_supported_increments
---

# logic:ascending sort (fields container)

## Description

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | field or fields container with only one field is expected |
| <strong>Pin 1</strong>|  component_priority_table |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | component priority table (vector of int) |
| <strong>Pin 2</strong>|  sort_by_scoping |[`bool`](../../getting-started/using-data-containers.md#bool) | if true, uses scoping to sort the field (default is false) |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: ascending_sort_fc

 **Full name**: logic.ascending_sort_fc

 **Internal name**: ascending_sort_fc

 **License**: any_dpf_supported_increments
