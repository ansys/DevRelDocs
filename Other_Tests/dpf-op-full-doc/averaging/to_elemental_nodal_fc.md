# averaging:to elemental nodal (fields container)

## Description

Transforms fields into Elemental Nodal fields using an averaging process. The result is computed on a given element's scoping.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: to_elemental_nodal_fc
- **full name**: averaging.to_elemental_nodal_fc
- **internal name**: to_elemental_nodal_fc
- **license**: None