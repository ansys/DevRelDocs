---
category: geo
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# geo:gauss to node (field)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extrapolating results available at Gauss or quadrature points to nodal points for one field. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral 


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Scoping to integrate on, if not provided, the one from input field is provided. |
| <strong>Pin 7</strong>|  mesh |[`abstract_meshed_region`](../../getting-started/using-data-containers.md#abstract-meshed-region) | Mesh to integrate on. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: geo

 **Plugin**: core

 **Scripting name**: gauss_to_node

 **Full name**: geo.gauss_to_node

 **Internal name**: gauss_to_node

 **License**: any_dpf_supported_increments
 
