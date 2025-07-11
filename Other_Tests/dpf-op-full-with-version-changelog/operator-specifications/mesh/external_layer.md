---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:external layer

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) |  |
|  **Pin 1**| nodes_mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |
|  **Pin 2**| elements_mesh_scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: external_layer

 **Full name**: mesh.external_layer

 **Internal name**: meshed_external_layer_sector

 **License**: None
 
