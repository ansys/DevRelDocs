# mesh:mesh to tetra

## Description

Converts 3D meshes of arbitrary 3D element types into a tetrahedral mesh, output at pin (0). Non 3D elements are ignored. Scopings providing the mapping from resulting nodes & elements to their original ID in the input mesh are provided, output pins (1) & (2) respectively.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | Mesh with arbitrary element types. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | mesh |[`meshed_region`](../../getting-started/using-data-containers.md#meshed-region) | Yes | Tetrahedralized mesh. |
| **Pin 1** | node_mapping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | Node mapping. |
| **Pin 2** | element_mapping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | Element mapping. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_to_tetra | mesh.mesh_to_tetra | mesh_to_tetra | None |
