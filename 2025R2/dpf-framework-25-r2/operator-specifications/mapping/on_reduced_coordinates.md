---
category: mapping
plugin: core
license: None
---

# mapping:on reduced coordinates

**Version: 0.0.0**

## Description

Evaluates a result on specified reduced coordinates of given elements (interpolates results inside elements with shape functions).

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  reduced_coordinates |[`field`](../../core-concepts/dpf-types.md#field), [`fields_container`](../../core-concepts/dpf-types.md#fields-container) | coordinates in the reference elements to find (found with the operator "find_reduced_coordinates") |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  element_ids |[`scopings_container`](../../core-concepts/dpf-types.md#scopings-container) | Ids of the elements where each set of reduced coordinates is found (found with the operator "find_reduced_coordinates") |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`meshes_container`](../../core-concepts/dpf-types.md#meshes-container) | if the first field in input has no mesh in support, then the mesh in this pin is expected (default is false), if a meshes container with several meshes is set, it should be on the same label spaces as the coordinates fields container |
| <strong>Pin 200</strong>|  use_quadratic_elements |[`bool`](../../core-concepts/dpf-types.md#standard-types) | If this pin is set to true, the interpolation is computed on the quadratic element if the element is quadratic (more precise but less performant). Default is false. To use only when results have mid side nodes values. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](../../core-concepts/dpf-types.md#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mapping

 **Plugin**: core

 **Scripting name**: on_reduced_coordinates

 **Full name**: mapping.on_reduced_coordinates

 **Internal name**: interpolation_operator

 **License**: None


## Changelog

- Version 0.0.0: Initial release.