---
category: mesh
plugin: core
license: None
---

# mesh:mesh_to_graphics

## Description

Generate tessellation for input mesh

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 2** node_normals (type: ['bool']) (optional: True): average element normals for node normals (default no, use element normals for node normals)

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** nodes (type: ['field']): node coordinates

- **Pin 1** normals (type: ['field']): node normals

- **Pin 2** connectivity (type: ['property_field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_to_graphics
- **full name**: mesh.mesh_to_graphics
- **internal name**: mesh_to_graphics
- **license**: None