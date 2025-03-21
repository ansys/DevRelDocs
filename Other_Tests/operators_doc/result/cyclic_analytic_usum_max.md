# result:cyclic analytic disp max

## Description

Compute the maximum of the total deformation that can be expected on 360 degrees

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scopings_container', 'scoping', 'vector<int32>']) (optional: True): 

- **Pin 2** fields_container (type: ['fields_container']) (optional: False): field container with the base and duplicate sectors

- **Pin 5** bool_rotate_to_global (type: ['bool']) (optional: True): default is true

- **Pin 16** cyclic_support (type: ['cyclic_support']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): FieldsContainer filled in


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.

- **use_cache** (type: ['bool']) (default: true): Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: cyclic_analytic_usum_max
- **full name**: result.cyclic_analytic_usum_max
- **internal name**: cyclic_analytic_usum_max
- **license**: None