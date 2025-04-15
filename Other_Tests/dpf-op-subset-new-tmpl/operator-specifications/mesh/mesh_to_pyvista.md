# mesh:mesh to pyvista

## Description

Export a MeshedRegion in the pyVista format.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 2** | coordinates |[`field`](../../getting-started/using-data-containers.md#field) | No | Node coordinates. If not set, the node coordinates of the mesh are employed. |
| **Pin 6** | as_linear |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true. |
| **Pin 7** | mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Yes | mesh to export in pyVista format |
| **Pin 60** | vtk_updated |[`bool`](../../getting-started/using-data-containers.md#bool) | No | True if the VTK version employed by pyVista is > VTK 9. Default true. |
| **Pin 200** | as_poly |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Export elements as polyhedrons (cell-face-node representation). Default false. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | nodes |[`field`](../../getting-started/using-data-containers.md#field) | Yes | Node coordinates double vector |
| **Pin 1** | cells |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes | Cell connectivity int vector |
| **Pin 2** | cell_types |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Yes | Cell types property int vector |
| **Pin 3** | offsets |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | No | If vtk_updated=false, offsets int vector |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **mesh** | vtk | None | None | mesh_to_pyvista | None |
