---
category: mesh
plugin: core
license: None
---

# mesh:mesh clipper

## Description

Clips a volume mesh along an iso value x, and construct the volume mesh defined by v < x.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  iso_value |[`double`](../../getting-started/using-data-containers.md#double) | iso value |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  closed_surface |[`int32`](../../getting-started/using-data-containers.md#int32) | 1: closed surface, 0: iso surface. |
| <strong>Pin 3</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
| <strong>Pin 4</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  slice_surfaces |[`bool`](../../getting-started/using-data-containers.md#bool) | True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |
|  **Pin 2**| mesh |[`meshed_region`](../../getting-started/using-data-containers.md#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: mesh_clip

 **Full name**: mesh.mesh_clip

 **Internal name**: mesh_clip

 **License**: None
