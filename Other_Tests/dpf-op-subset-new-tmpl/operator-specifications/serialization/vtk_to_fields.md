# serialization:vtk to fields

## Description

Write a field based on a vtk file.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_name |[`string`](../../getting-started/using-data-containers.md#string) | No | name of the field in the vtk file |
| **Pin 3** | streams |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | fields_container |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | vtk | vtk_to_fields | serialization.vtk_to_fields | vtk::vtk::FieldProvider | None |
