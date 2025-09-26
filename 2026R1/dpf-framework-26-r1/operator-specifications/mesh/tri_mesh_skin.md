---
category: mesh
plugin: core
license: None
---

# mesh:skin (tri mesh)

**Version: 0.0.0**

## Description

Extracts a skin of the mesh in triangles in a new meshed region.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
| <strong>Pin 1</strong>|  include_surfaces |[`bool`](../../core-concepts/dpf-types.md#standard-types) | True: meshing will also take into account shell and skin elements. False: meshing will ignore shell and skin elements. The default is false. |
| <strong>Pin 2</strong>|  mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |
|  **Pin 1**| nodes_mesh_scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: tri_mesh_skin

 **Full name**: mesh.tri_mesh_skin

 **Internal name**: meshed_skin_sector_triangle

 **License**: None


## Changelog

- Version 0.0.0: Initial release.