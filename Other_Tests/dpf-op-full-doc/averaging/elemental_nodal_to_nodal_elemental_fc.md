# averaging:elemental nodal to nodal elemental (fields container)

## Description

Transforms Elemental Nodal fields to Nodal Elemental fields. The result is computed on a given node's scoping.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_nodal_to_nodal_elemental_fc
- **full name**: averaging.elemental_nodal_to_nodal_elemental_fc
- **internal name**: ElementalNodal_To_NodalElemental_fc
- **license**: None