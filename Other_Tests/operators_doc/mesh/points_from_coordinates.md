---
category: mesh
plugin: core
license: None
---

# mesh:points from coordinates

## Description

Extract a mesh made of points elements. This mesh is made from input meshes coordinates on the input scopings.

## Inputs


- **Pin 0** nodes_to_keep (type: ['scoping', 'scopings_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: False): 


## Outputs


- **Pin 0** abstract_meshed_region (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: points_from_coordinates
- **full name**: mesh.points_from_coordinates
- **internal name**: mesh::points_from_coordinates
- **license**: None