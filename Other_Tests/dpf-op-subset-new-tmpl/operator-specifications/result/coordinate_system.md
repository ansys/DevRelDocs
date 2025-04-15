# result:coordinate system

## Description

Extracts the Rotation Matrix and Origin of a specific coordinate system

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | cs_id |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes |  |
| **Pin 3** | streams_container |[`streams_container`](../../getting-started/using-data-containers.md#streams-container) | No |  |
| **Pin 4** | data_sources |[`data_sources`](../../getting-started/using-data-containers.md#data-sources) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes | the first 9 double are the rotation (3x3 matrix) and the last 3 is the translation vector |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **result** | mapdl | coordinate_system | result.coordinate_system | mapdl::rst::CS | None |
