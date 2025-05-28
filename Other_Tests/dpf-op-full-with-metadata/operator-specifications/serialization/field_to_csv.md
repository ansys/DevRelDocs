---
category: serialization
plugin: csv
license: any_dpf_supported_increments
---

# serialization:field to csv

## Description

Exports a field or a fields container into a csv file

### Plugin

csv

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_or_fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | field_or_fields_container |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](../../getting-started/using-data-containers.md#string) |  |
| <strong>Pin 2</strong>|  storage_type |[`int32`](../../getting-started/using-data-containers.md#int32) | storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: serialization
- Plugin: csv
- Scripting name: None
- Full name: None
- Internal name: field_to_csv
- License: any_dpf_supported_increments
  