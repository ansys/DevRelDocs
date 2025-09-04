---
category: serialization
plugin: csv
license: any_dpf_supported_increments
---

# serialization:field to csv

**Version: 0.0.0**

## Description

Exports a field or a fields container into a csv file

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field_or_fields_container |[`fields_container`](./../../core-concepts/dpf-types.md#fields-container), [`field`](./../../core-concepts/dpf-types.md#field) | field_or_fields_container |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  file_path |[`string`](./../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 2</strong>|  storage_type |[`int32`](./../../core-concepts/dpf-types.md#standard-types) | storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: serialization

 **Plugin**: csv

 **Scripting name**: None

 **Full name**: None

 **Internal name**: field_to_csv

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.