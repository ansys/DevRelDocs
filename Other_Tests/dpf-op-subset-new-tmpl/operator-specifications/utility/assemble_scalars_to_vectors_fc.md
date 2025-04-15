# utility:assemble scalars to vector fc

## Description

Takes three scalar fields container and assembles them as a 3D vector fields container.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | x |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 1** | y |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 2** | z |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |

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
| **utility** | core | None | None | assemble_scalars_to_vectors_fc | None |
