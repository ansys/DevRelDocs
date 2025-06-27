---
category: averaging
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# averaging:gauss to node (fields container)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Extrapolates results available at Gauss or quadrature points to nodal points for a field container. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral. 


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  fields_container |[`fields_container`](./../../core-concepts/dpf-types#fields-container) |  |
| <strong>Pin 1</strong>|  mesh |[`abstract_meshed_region`](./../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](./../../core-concepts/dpf-types#meshes-container) | The mesh region in this pin is used for extrapolating results available at Gauss or quadrature points to nodal points. |
| <strong>Pin 3</strong>|  scoping |[`scoping`](./../../core-concepts/dpf-types#scoping) | Extrapolating results on the selected scoping. If it is a scoping container, the label must correspond to the one of the fields containers. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| fields_container |[`fields_container`](./../../core-concepts/dpf-types#fields-container) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: averaging

 **Plugin**: core

 **Scripting name**: gauss_to_node_fc

 **Full name**: averaging.gauss_to_node_fc

 **Internal name**: gauss_to_node_fc

 **License**: any_dpf_supported_increments
 
