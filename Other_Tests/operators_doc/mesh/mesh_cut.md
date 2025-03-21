---
category: mesh
plugin: core
license: None
---

# mesh:mesh cutter

## Description

Extracts a skin of the mesh in triangles in a new meshed region.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): Field containing the values for the iso-surface computation. The mesh can be retrieved from this field's support or through pin 2.

- **Pin 1** iso_value (type: ['double']) (optional: False): iso value

- **Pin 2** closed_surface (type: ['int32']) (optional: False): 1: closed surface, 0: iso surface.

- **Pin 3** mesh (type: ['meshed_region']) (optional: True): Mesh to compute the iso-surface from. Used when not given through the support of the field in pin 0.

- **Pin 4** slice_surfaces (type: ['bool']) (optional: False): True: slicing will also take into account shell and skin elements. False: slicing will ignore shell and skin elements. The default is true.


## Outputs


- **Pin 2** mesh (type: ['meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_cut
- **full name**: mesh.mesh_cut
- **internal name**: mesh_cut
- **license**: None