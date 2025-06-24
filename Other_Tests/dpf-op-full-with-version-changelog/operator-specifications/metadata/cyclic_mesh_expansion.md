---
category: metadata
plugin: core
license: None
Version: 0.0.0
---

# metadata:cyclic mesh expansion

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Expand the mesh.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong>|  sector_meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |
| <strong>Pin 16</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) |  |
| <strong>Pin 18</strong>|  sectors_to_expand |[`vector<int32>`](../../getting-started/using-data-containers.md#vector<int32>), [`scoping`](../../getting-started/using-data-containers.md#scoping), [`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | sectors to expand (start at 0), for multistage: use scopings container with 'stage' label. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshed_region |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | expanded meshed region. |
|  **Pin 1**| cyclic_support |[`cyclic_support`](../../getting-started/using-data-containers.md#cyclic-support) | input cyclic support modified in place containing the new expanded meshed regions. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: cyclic_mesh_expansion

 **Full name**: metadata.cyclic_mesh_expansion

 **Internal name**: cyclic_expansion_mesh

 **License**: None
 
