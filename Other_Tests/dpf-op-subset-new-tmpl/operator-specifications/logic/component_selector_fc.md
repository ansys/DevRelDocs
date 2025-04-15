# logic:component selector (fields container)

## Description

Creates a scalar fields container based on the selected component for each field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | component_number |[`int32`](../../getting-started/using-data-containers.md#int32), [`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes | one or several component index that will be extracted from the initial field. |

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
| **logic** | core | component_selector_fc | logic.component_selector_fc | component_selector_fc | None |
