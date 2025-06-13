---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:skin (tri mesh)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extracts a skin of the mesh in triangles in a new meshed region.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 1</strong>|  include_surfaces |[`bool`](./../../getting-started/using-data-containers.md#bool) | True: meshing will also take into account shell and skin elements. False: meshing will ignore shell and skin elements. The default is false. |
| <strong>Pin 2</strong>|  mesh_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping) | Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
|  **Pin 1**| nodes_mesh_scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: tri_mesh_skin

 **Full name**: mesh.tri_mesh_skin

 **Internal name**: meshed_skin_sector_triangle

 **License**: None
 
