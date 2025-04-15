# metadata:cyclic mesh expansion

## Description

Expand the mesh.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 7** | sector_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | No |  |
| **Pin 16** | cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) | Yes |  |
| **Pin 18** | sectors_to_expand |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | No | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | expanded meshed region. |
| **Pin 1** | cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) | Yes | input cyclic support modified in place containing the new expanded meshed regions. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **metadata** | core | cyclic_mesh_expansion | metadata.cyclic_mesh_expansion | cyclic_expansion_mesh | None |
