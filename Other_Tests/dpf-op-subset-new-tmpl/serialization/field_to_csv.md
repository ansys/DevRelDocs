# serialization:field to csv

## Description

Exports a field or a fields container into a csv file

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_or_fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container), [`field`](../getting-started/using-data-containers.md#field) | Yes | field_or_fields_container |
| **Pin 1** | file_path |[`string`](../getting-started/using-data-containers.md#string) | Yes |  |
| **Pin 2** | storage_type |[`int32`](../getting-started/using-data-containers.md#int32) | No | storage type : if matrices (without any particularity) are included in the fields container, the storage format can be chosen. 0 : flat/line format, 1 : ranked format. If 1 is chosen, the csv can not be read by "csv to field" operator anymore. Default : 0. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | csv | None | None | field_to_csv | any_dpf_supported_increments |
