---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:from scopings

**Version: 0.0.0**

## Description

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  scopings_container |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | if nodal scoping, then the scoping is transposed respecting the inclusive pin |
| <strong>Pin 2</strong>|  inclusive |[`int32`](../../core-concepts/dpf-types.md#standard-types) | if inclusive == 1 then all the elements/faces adjacent to the nodes/faces ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes/faces in the scoping are included |
| <strong>Pin 3</strong>|  nodes_only |[`bool`](../../core-concepts/dpf-types.md#standard-types) | returns mesh with nodes only (without any elements). Default is false. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshes |[`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: from_scopings

 **Full name**: mesh.from_scopings

 **Internal name**: meshes::by_scopings

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.