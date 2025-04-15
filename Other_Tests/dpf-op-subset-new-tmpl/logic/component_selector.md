# logic:component selector (field)

## Description

Creates a scalar/vector field based on the selected component.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | component_number |[`int32`](../getting-started/using-data-containers.md#int32), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | Yes | One or several component index that will be extracted from the initial field. |
| **Pin 2** | default_value |[`double`](../getting-started/using-data-containers.md#double) | No | Set a default value for components that do not exist. |

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
| **logic** | core | component_selector | logic.component_selector | component_selector | None |
