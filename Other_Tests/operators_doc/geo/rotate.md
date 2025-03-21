---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:rotate

## Description

Applies a transformation (rotation) matrix on a field.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** field_rotation_matrix (type: ['field']) (optional: False): 3-3 rotation matrix


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: rotate
- **full name**: geo.rotate
- **internal name**: rotate
- **license**: any_dpf_supported_increments