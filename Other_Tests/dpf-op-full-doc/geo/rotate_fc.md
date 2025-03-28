# geo:rotate (fields container)

## Description

Apply a transformation (rotation) matrix on all the fields of a fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** coordinate_system (type: ['field']) (optional: False): 3-3 rotation matrix


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: rotate_fc
- **full name**: geo.rotate_fc
- **internal name**: rotate_fc
- **license**: any_dpf_supported_increments