---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics_edges

## Description

Generate edges of surface elements for input mesh

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 6** include_mid_nodes (type: ['bool']) (optional: True): 

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** nodes (type: ['field']): node coordinates

- **Pin 2** connectivity (type: ['property_field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_to_graphics_edges
- **full name**: mesh.mesh_to_graphics_edges
- **internal name**: mesh_to_graphics_edges
- **license**: None