---
category: serialization
plugin: vtk
license: None
Version: 0.0.0
---

# serialization:vtk to fields

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Write a field based on a vtk file.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong>|  field_name |[`string`](./../../getting-started/using-data-containers.md#string) | name of the field in the vtk file |
| <strong>Pin 3</strong>|  streams |[`streams_container`](./../../getting-started/using-data-containers.md#streams-container) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  data_sources |[`data_sources`](./../../getting-started/using-data-containers.md#data-sources) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../getting-started/using-data-containers.md#fields-container) | fields_container |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: vtk

 **Scripting name**: vtk_to_fields

 **Full name**: serialization.vtk_to_fields

 **Internal name**: vtk::vtk::FieldProvider

 **License**: None
 
