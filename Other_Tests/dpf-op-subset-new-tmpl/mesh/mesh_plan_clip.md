# mesh:mesh plan clipper

## Description

Clips a volume mesh along a plane and keeps one side.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh_or_field |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region), [`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | normal |[`field`](../getting-started/using-data-containers.md#field) | Yes | An overall 3D vector that gives the normal direction of the plane. |
| **Pin 2** | origin |[`field`](../getting-started/using-data-containers.md#field) | Yes | An overall 3D vector that gives a point of the plane. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | mesh |[`abstract_meshed_region`](../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_plan_clip | mesh.mesh_plan_clip | mesh_plan_clip | None |
