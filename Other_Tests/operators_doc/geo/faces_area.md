---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:faces area

## Description

Compute the measure of the Faces (surface for 2D faces of a 3D model or length for 1D faces of a 2D model) using default shape functions, except for polygons.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: False): If not provided, the measure of all Faces in the mesh is computed. If provided, the Scoping needs to have "Faces" location.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: faces_area
- **full name**: geo.faces_area
- **internal name**: face::area
- **license**: any_dpf_supported_increments