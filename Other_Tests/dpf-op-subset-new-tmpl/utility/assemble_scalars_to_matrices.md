# utility:assemble scalars to matrix

## Description

Take nine scalar fields and assemble them as a 3x3 matrix field. If the 'symmetrical' input is set to true, only six scalar fields are required (xx, yy, zz, xy, xz and yz).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | xx |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 1** | yy |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 2** | zz |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 3** | xy |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 4** | yz |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 5** | xz |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 6** | yx |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 7** | zy |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 8** | zx |[`field`](../getting-started/using-data-containers.md#field) | No |  |
| **Pin 60** | symmetrical |[`bool`](../getting-started/using-data-containers.md#bool) | No |  |

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
| **utility** | core | None | None | assemble_scalars_to_matrices | None |
