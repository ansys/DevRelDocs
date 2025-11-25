---
category: mesh
plugin: vtk
license: None
---

# mesh:mesh to pyvista

**Version: 0.0.0**

## Description

Export a MeshedRegion in the pyVista format.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 2</strong>|  coordinates |[`field`](../../core-concepts/dpf-types.md#field) | Node coordinates. If not set, the node coordinates of the mesh are employed. |
| <strong>Pin 6</strong>|  as_linear |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Export a linear version of the mesh (quadratic surface elements do no include midside nodes). If not set, defaults to true. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | mesh to export in pyVista format |
| <strong>Pin 60</strong>|  vtk_updated |[`bool`](../../core-concepts/dpf-types.md#standard-types) | True if the VTK version employed by pyVista is > VTK 9. Default true. |
| <strong>Pin 200</strong>|  as_poly |[`bool`](../../core-concepts/dpf-types.md#standard-types) | Export elements as polyhedrons (cell-face-node representation). Default false. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| nodes |[`field`](../../core-concepts/dpf-types.md#field) | Node coordinates double vector |
|  **Pin 1**| cells |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Cell connectivity int vector |
|  **Pin 2**| cell_types |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | Cell types property int vector |
|  **Pin 3**| offsets |[`vector<int32>`](../../core-concepts/dpf-types.md#standard-types) | If vtk_updated=false, offsets int vector |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: vtk

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mesh_to_pyvista

 **License**: None


## Changelog

- Version 0.0.0: Initial release.