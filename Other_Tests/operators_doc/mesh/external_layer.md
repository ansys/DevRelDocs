---
category: mesh
plugin: core
license: None
---

# mesh:external layer

## Description

Extracts the external layer (thick skin) of the mesh (3D elements) in a new meshed region.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): 

- **Pin 1** nodes_mesh_scoping (type: ['scoping']): 

- **Pin 2** elements_mesh_scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: external_layer
- **full name**: mesh.external_layer
- **internal name**: meshed_external_layer_sector
- **license**: None