# utility:assemble scalars to matrix fc

## Description

Take nine scalar fields container and assemble them as a 3x3 matrix fields. If the 'symmetrical' input is set to true, only six field containers are required (xx, yy, zz, xy, xz and yz).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | xx |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 1** | yy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 2** | zz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 3** | xy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 4** | yz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 5** | xz |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 6** | yx |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 7** | zy |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 8** | zx |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | No |  |
| **Pin 60** | symmetrical |[`bool`](../../getting-started/using-data-containers.md#bool) | No |  |

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
| **utility** | core | None | None | assemble_scalars_to_matrices_fc | None |
