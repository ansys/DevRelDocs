# utility:assemble scalars to vector

## Description

Takes three scalar fields and assembles them as a 3D vector field.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | x |[`field`](../../getting-started/using-data-containers.md#field) | No |  |
| **Pin 1** | y |[`field`](../../getting-started/using-data-containers.md#field) | No |  |
| **Pin 2** | z |[`field`](../../getting-started/using-data-containers.md#field) | No |  |

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
| **utility** | core | None | None | assemble_scalars_to_vectors | None |
