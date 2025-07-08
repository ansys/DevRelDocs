---
category: mesh
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# mesh:from scoping

**Version: 0.0.0**


## Description

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields of the meshed region: the 'Elemental', 'Face', and 'Nodal' property fields are scoped to the elements or nodes of the output mesh, the 'Global' property fields are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) | if nodal scoping, then the scoping is transposed respecting the inclusive pin |
| <strong>Pin 2</strong> | inclusive |[`int32`](../../core-concepts/dpf-types.md#standard-types) | if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included |
| <strong>Pin 3</strong> | nodes_only |[`bool`](../../core-concepts/dpf-types.md#standard-types) | returns mesh with nodes only (without any elements or property fields). Default is false. |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: from_scoping

 **Full name**: mesh.from_scoping

 **Internal name**: mesh::by_scoping

 **License**: any_dpf_supported_increments
 

## Changelog

- Version 0.0.0: Initial release.