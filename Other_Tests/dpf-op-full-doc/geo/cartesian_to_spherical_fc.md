# geo:cartesian to spherical coordinates (fields container)

## Description

Converts 3D field from cartesian coordinates to spherical coordinates.

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
- **scripting name**: cartesian_to_spherical_fc
- **full name**: geo.cartesian_to_spherical_fc
- **internal name**: cartesian_to_spherical_fc
- **license**: any_dpf_supported_increments