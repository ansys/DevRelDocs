---
category: mesh
plugin: vtk
license: None
---

# mesh:mesh to pyvista

## Description

Export a MeshedRegion in the pyVista format.

### Plugin

vtk

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 2</strong>|  coordinates |[`field`](../../getting-started/using-data-containers.md#field) | Node coordinates. If not set, the node coordinates of the mesh are employed. |
| <strong>Pin 6</strong>|  as_linear |[`bool`](../../getting-started/using-data-containers.md#bool) | Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | mesh to export in pyVista format |
| <strong>Pin 60</strong>|  vtk_updated |[`bool`](../../getting-started/using-data-containers.md#bool) | True if the VTK version employed by pyVista is > VTK 9. Default true. |
| <strong>Pin 200</strong>|  as_poly |[`bool`](../../getting-started/using-data-containers.md#bool) | Export elements as polyhedrons (cell-face-node representation). Default false. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | nodes |[`field`](../../getting-started/using-data-containers.md#field) | Node coordinates double vector |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | cells |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Cell connectivity int vector |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | cell_types |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | Cell types property int vector |
| <strong>Pin 3</strong> | offsets |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>) | If vtk_updated=false, offsets int vector |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: mesh
- Plugin: vtk
- Scripting name: None
- Full name: None
- Internal name: mesh_to_pyvista
- License: None
  