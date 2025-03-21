---
category: averaging
plugin: core
license: None
---

# averaging:to nodal (fields container)

## Description

Transforms fields into Nodal fields using an averaging process. The result is computed on a given node's scoping.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: True): 

- **Pin 3** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 26** merge_solid_shell (type: ['bool']) (optional: True): For shell/solid mixed field, gather in one field all solids and shells (only on one layer, false by default).

- **Pin 27** shell_layer (type: ['int32']) (optional: True): If merge_solid_shell pin set to true, user have to choose a shell layer. For shell/solid mixed field, gather in one field all solids and shells (only on one layer).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: to_nodal_fc
- **full name**: averaging.to_nodal_fc
- **internal name**: to_nodal_fc
- **license**: None