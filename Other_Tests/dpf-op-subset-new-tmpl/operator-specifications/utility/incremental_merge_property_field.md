# utility:incremental property field

## Description

Incrementaly merge the input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | input |[`property_field`](../../getting-started/using-data-containers.md#property-field) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | incremented_result | | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | incremental::merge::property_field | utility.incremental::merge::property_field | incremental::merge::property_field | None |
