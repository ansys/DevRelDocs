---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:make plane levelset

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Computes the level set for a plane using coordinates.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinates |[`abstract_meshed_region`](./../../getting-started/using-data-containers.md#abstract-meshed-region), [`field`](./../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  normal |[`field`](./../../getting-started/using-data-containers.md#field) | An overall 3D vector that gives the normal direction of the plane. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  origin |[`field`](./../../getting-started/using-data-containers.md#field) | An overall 3d vector that gives a point of the plane. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](./../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: make_plane_levelset

 **Full name**: mesh.make_plane_levelset

 **Internal name**: levelset::make_plane

 **License**: None
 
