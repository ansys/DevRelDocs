# mesh:make plane levelset

## Description

Computes the level set for a plane using coordinates.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | coordinates |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | normal |[`field`](../getting-started/using-data-containers.md#field) | Yes | An overall 3D vector that gives the normal direction of the plane. |
| **Pin 2** | origin |[`field`](../getting-started/using-data-containers.md#field) | Yes | An overall 3d vector that gives a point of the plane. |

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
| **mesh** | core | make_plane_levelset | mesh.make_plane_levelset | levelset::make_plane | None |
