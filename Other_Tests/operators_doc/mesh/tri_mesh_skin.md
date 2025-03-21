---
category: mesh
plugin: core
license: None
---

# mesh:skin (tri mesh)

## Description

Extracts a skin of the mesh in triangles in a new meshed region.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** include_surfaces (type: ['bool']) (optional: True): True: meshing will also take into account shell and skin elements. False: meshing will ignore shell and skin elements. The default is false.

- **Pin 2** mesh_scoping (type: ['scoping']) (optional: True): Nodal scoping to restrict the skin extraction to a set of nodes. If provided, a skin element is added to the skin mesh if all its nodes are in the scoping.


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): 

- **Pin 1** nodes_mesh_scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: tri_mesh_skin
- **full name**: mesh.tri_mesh_skin
- **internal name**: meshed_skin_sector_triangle
- **license**: None