---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:mesh cutter

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extracts a skin of the mesh in triangles in a new meshed region.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](./../../core-concepts/dpf-types#field) | Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  iso_value |[`double`](./../../core-concepts/dpf-types#standard-types) | iso value |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  closed_surface |[`int32`](./../../core-concepts/dpf-types#standard-types) | 1: closed surface, 0: iso surface. |
| <strong>Pin 3</strong>|  mesh |[`meshed_region`](./../../core-concepts/dpf-types#meshed-region) | Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0. |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  slice_surfaces |[`bool`](./../../core-concepts/dpf-types#standard-types) | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 2**| mesh |[`meshed_region`](./../../core-concepts/dpf-types#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_cut

 **Full name**: mesh.mesh_cut

 **Internal name**: mesh_cut

 **License**: None
 
