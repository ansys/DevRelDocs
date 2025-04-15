# logic:elementary data selector (field)

## Description

Creates a scalar/vector field based on the selected elementary data.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | elementary_data_index |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes | One or several elementary data index that will be extracted from the initial field. For field with nature matrix, this is the line indices to extract. |
| **Pin 2** | default_value |[`double`](../../getting-started/using-data-containers.md#double) | No | Set a default value for elementary data that do not exist. |
| **Pin 3** | elementary_data_index_2 |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | For field with nature matrix, this is the column indices to extract. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | elementary_data_selector | logic.elementary_data_selector | elementary_data_selector | None |
