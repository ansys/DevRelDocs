---
category: mesh
plugin: core
license: None
Version: 0.0.0
---

# mesh:node coordinates

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Returns the node coordinates of the mesh(es) in input.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  mesh |[`abstract_meshed_region`](../../core-concepts/dpf-types#abstract-meshed-region), [`meshes_container`](../../core-concepts/dpf-types#meshes-container) |  |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| coordinates |[`field`](../../core-concepts/dpf-types#field), [`fields_container`](../../core-concepts/dpf-types#fields-container) | if the input is a meshed region, a field of coordinates is the output, else if the input is a  meshes container, a fields container (one field by mesh) is the output |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: mesh

 **Plugin**: core

 **Scripting name**: node_coordinates

 **Full name**: mesh.node_coordinates

 **Internal name**: mesh::node_coordinates

 **License**: None
 
