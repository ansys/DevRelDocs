---
category: mesh
plugin: core
license: None
---

# mesh:make plane levelset

## Description

Computes the level set for a plane using coordinates.

## Inputs


- **Pin 0** coordinates (type: ['abstract_meshed_region', 'field']) (optional: False): 

- **Pin 1** normal (type: ['field']) (optional: False): An overall 3D vector that gives the normal direction of the plane.

- **Pin 2** origin (type: ['field']) (optional: False): An overall 3d vector that gives a point of the plane.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: make_plane_levelset
- **full name**: mesh.make_plane_levelset
- **internal name**: levelset::make_plane
- **license**: None