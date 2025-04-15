# logic:descending sort (fields container)

## Description

Sort a field (in 0) in descending order, with an optional component priority table or a boolean to enable sort by scoping (in 1). This operator doesn't support multiple elementary data per entity.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | component_priority_table |[`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | No | component priority table (vector of int) |
| **Pin 2** | sort_by_scoping |[`bool`](../getting-started/using-data-containers.md#bool) | No | if true, uses scoping to sort the field (default is false) |

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
| **logic** | core | descending_sort_fc | logic.descending_sort_fc | descending_sort_fc | any_dpf_supported_increments |
