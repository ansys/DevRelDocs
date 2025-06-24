---
category: mapping
plugin: core
license: None
Version: 0.0.0
---

# mapping:find reduced coordinates

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Finds the elements corresponding to the given coordinates in input and computes their reduced coordinates in those elements.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  coordinates |[`field`](../../getting-started/using-data-containers.md#field), [`fields_container`](../../getting-started/using-data-containers.md#fields-container), [`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) |  |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region), [`meshes_container`](../../getting-started/using-data-containers.md#meshes-container) | If the first field in input has no mesh in support, then the mesh in this pin is expected (default is false). If a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container. |
| <strong>Pin 200</strong>|  use_quadratic_elements |[`bool`](../../getting-started/using-data-containers.md#bool) | If this pin is set to true, reduced coordinates are computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| reduced_coordinates |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | coordinates in the reference elements |
|  **Pin 1**| element_ids |[`scopings_container`](../../getting-started/using-data-containers.md#scopings-container) | Ids of the elements where each set of reduced coordinates is found |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: find_reduced_coordinates

 **Full name**: mapping.find_reduced_coordinates

 **Internal name**: find_reduced_coordinates

 **License**: None
 
