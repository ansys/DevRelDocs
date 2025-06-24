---
category: mesh
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# mesh:change cs (meshes)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Applies a transformation (rotation and displacement) matrix on a mesh or meshes container.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  meshes |[`meshed_region`](../../getting-started/using-data-containers.md#meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinate_system |[`field`](../../getting-started/using-data-containers.md#field) | 3-3 rotation matrix + 3 translations (X, Y, Z) |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| meshed_region |[`meshed_region`](../../getting-started/using-data-containers.md#meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **num_threads** |[`int32`](../../getting-started/using-data-containers.md#int32) | 0 | Number of threads to use to run in parallel |
| **run_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | true | Loops are allowed to run in parallel if the value of this config is set to true. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: change_cs

 **Full name**: mesh.change_cs

 **Internal name**: mesh::change_cs

 **License**: any_dpf_supported_increments
 
