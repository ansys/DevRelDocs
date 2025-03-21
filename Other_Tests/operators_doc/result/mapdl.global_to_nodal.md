---
category: result
plugin: mapdl
license: None
---

# result:global_to_nodal

## Description

Rotate results from global coordinate system to local coordinate system.

## Inputs


- **Pin 0** fieldA (type: ['field']) (optional: False): Vector or tensor field that must be rotated, expressed in global coordinate system.

- **Pin 1** fieldB (type: ['field']) (optional: False): Nodal euler angles defined from an rst file. Those  must be the rotations from Nodal to Global.


## Outputs


- **Pin 0** field (type: ['field']): Rotated field


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: mapdl.global_to_nodal
- **full name**: result.mapdl.global_to_nodal
- **internal name**: GlobalToNodal
- **license**: None