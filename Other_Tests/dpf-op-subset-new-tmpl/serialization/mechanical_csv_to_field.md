# serialization:mechanical csv to field

## Description

Reads mechanical exported csv file

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | unit |[`class dataProcessing::unit::CUnit`](../getting-started/using-data-containers.md#class dataProcessing::unit::CUnit) | Yes |  |
| **Pin 1** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes |  |
| **Pin 9** | requested_location |[`string`](../getting-started/using-data-containers.md#string), [`field_definition`](../getting-started/using-data-containers.md#field-definition) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **serialization** | csv | None | None | mechanical_csv_to_field | None |
