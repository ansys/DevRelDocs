---
category: mesh
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# mesh:from scopings

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_container |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | if nodal scoping, then the scoping is transposed respecting the inclusive pin |
| <strong>Pin 2</strong>|  inclusive |[`int32`](../../getting-started/using-data-containers.md#int32) | if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included |
| <strong>Pin 3</strong>|  nodes_only |[`bool`](../../getting-started/using-data-containers.md#bool) | returns mesh with nodes only (without any elements). Default is false. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes |[`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: from_scopings

 **Full name**: mesh.from_scopings

 **Internal name**: meshes::by_scopings

 **License**: any_dpf_supported_increments
 
