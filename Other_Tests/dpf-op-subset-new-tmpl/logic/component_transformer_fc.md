# logic:component transformer (fields container)

## Description

Takes the input field and creates a field with overriden value on given components.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | component_number |[`int32`](../getting-started/using-data-containers.md#int32), [`vector<int32>`](../getting-started/using-data-containers.md#vector<int32>) | Yes | One or several component index that will be modified from the initial field. |
| **Pin 2** | default_value |[`double`](../getting-started/using-data-containers.md#double) | No | Set a default value for components selected. |

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
| **logic** | core | component_transformer_fc | logic.component_transformer_fc | component_transformer_fc | None |
