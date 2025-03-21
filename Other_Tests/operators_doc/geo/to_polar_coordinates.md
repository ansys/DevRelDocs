---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:to polar coordinates

## Description

Finds r, theta (rad), and z coordinates of a coordinates (nodal) field in a cartesian coordinates system where the input coordinate system defines the rotation axis and the origin.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** coordinate_system (type: ['field']) (optional: True): 3-3 rotation matrix and origin coordinates must be set here to define a coordinate system. By default, the rotation axis is the z axis and the origin is [0,0,0].


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: to_polar_coordinates
- **full name**: geo.to_polar_coordinates
- **internal name**: polar_coordinates
- **license**: any_dpf_supported_increments