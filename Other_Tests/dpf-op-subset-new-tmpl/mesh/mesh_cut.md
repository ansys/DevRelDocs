# mesh:mesh cutter

## Description

Extracts a skin of the mesh in triangles in a new meshed region.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes | Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2. |
| **Pin 1** | iso_value |[`double`](../getting-started/using-data-containers.md#double) | Yes | iso value |
| **Pin 2** | closed_surface |[`int32`](../getting-started/using-data-containers.md#int32) | Yes | 1: closed surface, 0: iso surface. |
| **Pin 3** | mesh |[`meshed_region`](../getting-started/using-data-containers.md#meshed-region) | No | Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0. |
| **Pin 4** | slice_surfaces |[`bool`](../getting-started/using-data-containers.md#bool) | Yes | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 2** | mesh |[`meshed_region`](../getting-started/using-data-containers.md#meshed-region) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | core | mesh_cut | mesh.mesh_cut | mesh_cut | None |
