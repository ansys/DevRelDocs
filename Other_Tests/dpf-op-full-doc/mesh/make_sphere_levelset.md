# mesh:make sphere levelset

## Description

Computes the level set for a sphere using coordinates.

## Inputs


- **Pin 0** coordinates (type: ['abstract_meshed_region', 'field']) (optional: False): 

- **Pin 1** origin (type: ['field']) (optional: False): An overall 3d vector that gives a point of the plane.

- **Pin 2** radius (type: ['double']) (optional: False): Sphere radius.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: make_sphere_levelset
- **full name**: mesh.make_sphere_levelset
- **internal name**: levelset::make_sphere
- **license**: None