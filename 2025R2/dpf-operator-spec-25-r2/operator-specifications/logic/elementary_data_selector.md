---
category: logic
plugin: core
license: None
Version: 0.0.0
---

# logic:elementary data selector (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Creates a scalar/vector field based on the selected elementary data.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](./../../getting-started/using-data-containers.md#field), [`fields_container`](./../../getting-started/using-data-containers.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  elementary_data_index |[`int32`](./../../getting-started/using-data-containers.md#int32), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>) | One or several elementary data index that will be extracted from the initial field. For field with nature matrix, this is the line indices to extract. |
| <strong>Pin 2</strong>|  default_value |[`double`](./../../getting-started/using-data-containers.md#double) | Set a default value for elementary data that do not exist. |
| <strong>Pin 3</strong>|  elementary_data_index_2 |[`int32`](./../../getting-started/using-data-containers.md#int32), [`vector<int32>`](./../../getting-started/using-data-containers.md#vector<int32>) | For field with nature matrix, this is the column indices to extract. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: logic

 **Plugin**: core

 **Scripting name**: elementary_data_selector

 **Full name**: logic.elementary_data_selector

 **Internal name**: elementary_data_selector

 **License**: None
 
