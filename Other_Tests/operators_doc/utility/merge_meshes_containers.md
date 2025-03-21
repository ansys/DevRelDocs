---
category: utility
plugin: core
license: None
---

# utility:merge meshes containers

## Description

Assembles a set of meshes containers into a unique one.

## Inputs


- **Pin 0** meshes_containers (type: ['vector<shared_ptr<meshes_container>>', 'meshes_container']) (optional: False): a vector of meshes containers to merge or meshes containers from pin 0 to ...


## Outputs


- **Pin 0** merged_meshes_container (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_meshes_containers
- **full name**: utility.merge_meshes_containers
- **internal name**: merge::meshes_container
- **license**: None