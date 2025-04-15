# logic:elementary data selector (fields container)

## Description

Creates a scalar fields container based on the selected elementary data for each field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | elementary_data_index |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes | one or several elementary data indices that will be extracted from the initial field. For a field with a nature matrix, this extracts the line indices. |
| **Pin 3** | elementary_data_index_2 |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | For a field with nature matrix, this extracts the column indices. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **logic** | core | elementary_data_selector_fc | logic.elementary_data_selector_fc | elementary_data_selector_fc | None |
