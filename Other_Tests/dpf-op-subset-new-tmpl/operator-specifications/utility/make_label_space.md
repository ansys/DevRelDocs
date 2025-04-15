# utility:make label space

## Description

Assemble strings and integers to make a label space.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | base_label |[`label_space`](../../getting-started/using-data-containers.md#label-space), [`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | No | Used as a base label (extracted from Fields/Scoping Container, or directly from Label Space) that is concatenated with provided values. |
| **Pin 1** | label_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes |  |
| **Pin 2** | label_value |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | label |[`label_space`](../../getting-started/using-data-containers.md#label-space) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | make_label_space | utility.make_label_space | make_label_space | None |
