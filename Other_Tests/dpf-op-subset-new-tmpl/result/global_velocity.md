# result:global velocity (LSDyna)

## Description

Read Global Velocity (LSDyna) by calling the readers defined by the datasources.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 3** | streams_container |[`streams_container`](../getting-started/using-data-containers.md#streams-container) | No | result file container allowed to be kept open to cache data |
| **Pin 4** | data_sources |[`data_sources`](../getting-started/using-data-containers.md#data-sources) | Yes | result file path container, used if no streams are set |
| **Pin 50** | unit_system |[`int32`](../getting-started/using-data-containers.md#int32), [`string`](../getting-started/using-data-containers.md#string), [`class dataProcessing::unit::CUnitSystem`](../getting-started/using-data-containers.md#class dataProcessing::unit::CUnitSystem) | No | Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | core | global_velocity | result.global_velocity | GLOB_V | None |
