# mesh:mesh plan clipper

## Description

Clips a volume mesh along a plane and keeps one side.

## Inputs


- **Pin 0** mesh_or_field (type: ['abstract_meshed_region', 'field']) (optional: False): 

- **Pin 1** normal (type: ['field']) (optional: False): An overall 3D vector that gives the normal direction of the plane.

- **Pin 2** origin (type: ['field']) (optional: False): An overall 3D vector that gives a point of the plane.


## Outputs


- **Pin 0** field (type: ['field']): 

- **Pin 2** mesh (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_plan_clip
- **full name**: mesh.mesh_plan_clip
- **internal name**: mesh_plan_clip
- **license**: None