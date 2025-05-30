# geo:rotate cylindrical coordinates

## Description

Rotates a field to its corresponding values into the specified cylindrical coordinate system (corresponding to the field position). If a coordinate system is not set in the coordinate_system pin, the field is rotated on each node following the local polar coordinate system.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** coordinate_system (type: ['field']) (optional: True): 3-3 rotation matrix and origin coordinates must be set here to define a coordinate system.

- **Pin 2** mesh (type: ['abstract_meshed_region']) (optional: True): Mesh support of the input field.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: rotate_in_cylindrical_cs
- **full name**: geo.rotate_in_cylindrical_cs
- **internal name**: transform_cylindricalCS
- **license**: any_dpf_supported_increments