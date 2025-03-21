# result:nodal_to_global

## Description

Rotates nodal elemental results to global coordinate system

## Inputs


- **Pin 0** fieldA (type: ['field']) (optional: False): Vector or tensor field that must be rotated, expressed in nodal coordinate system.

- **Pin 1** fieldB (type: ['field']) (optional: False): Nodal euler angles defined from an rst file. Those  must be the rotations from Nodal to Global.


## Outputs


- **Pin 0** field (type: ['field']): Rotated field


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl.nodal_to_global
- **full name**: result.mapdl.nodal_to_global
- **internal name**: NodalElementalResultsRotation
- **license**: None