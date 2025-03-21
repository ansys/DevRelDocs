---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:spherical to cartesian coordinates (fields container)

## Description

Converts 3D field from spherical coordinates to cartesian coordinates.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: spherical_to_cartesian_fc
- **full name**: geo.spherical_to_cartesian_fc
- **internal name**: spherical_to_cartesian_fc
- **license**: any_dpf_supported_increments