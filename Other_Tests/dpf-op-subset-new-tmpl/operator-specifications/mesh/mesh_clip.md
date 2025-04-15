# mesh:mesh clipper

## Description

Clips a volume mesh along an iso value x, and construct the volume mesh defined by v < x.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | iso_value |[`double`](../../getting-started/using-data-containers.md#double) | Yes | iso value |
| **Pin 2** | closed_surface |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | 1: closed surface, 0: iso surface. |
| **Pin 3** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | No |  |
| **Pin 4** | slice_surfaces |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | mesh |[`meshed_region`](../../getting-started/using-data-containers.md#meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_clip | mesh.mesh_clip | mesh_clip | None |
