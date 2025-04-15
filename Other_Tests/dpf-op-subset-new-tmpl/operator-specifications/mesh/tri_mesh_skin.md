# mesh:skin (tri mesh)

## Description

Extracts a skin of the mesh in triangles in a new meshed region.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | include_surfaces |[`bool`](../../getting-started/using-data-containers.md#bool) | No | True: meshing will also take into account shell and skin elements. False: meshing will ignore shell and skin elements. The default is false. |
| **Pin 2** | mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | No | Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes |  |
| **Pin 1** | nodes_mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | tri_mesh_skin | mesh.tri_mesh_skin | meshed_skin_sector_triangle | None |
