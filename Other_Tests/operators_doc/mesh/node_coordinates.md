---
category: mesh
plugin: core
license: None
---

# mesh:node coordinates

## Description

Returns the node coordinates of the mesh(es) in input.

## Inputs


- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: False): 


## Outputs


- **Pin 0** coordinates (type: ['field', 'fields_container']): if the input is a meshed region, a field of coordinates is the output, else if the input is a  meshes container, a fields container (one field by mesh) is the output


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: node_coordinates
- **full name**: mesh.node_coordinates
- **internal name**: mesh::node_coordinates
- **license**: None