# utility:incremental concantenate as fields container.

## Description

Assemble fields in a fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | label |[`label_space`](../../getting-started/using-data-containers.md#label-space) | No | Label space value that must be applied to the added field. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | output |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | incremental_concatenate_as_fc | utility.incremental_concatenate_as_fc | incremental::concatenate_as_fc | None |
