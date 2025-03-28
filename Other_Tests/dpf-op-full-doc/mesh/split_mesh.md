# mesh:split mesh wrt property

## Description

Split the input mesh into several meshes based on a given property (material property be default)

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): Scoping

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 13** property (type: ['string']) (optional: False): 


## Outputs


- **Pin 0** meshes (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: split_mesh
- **full name**: mesh.split_mesh
- **internal name**: split_mesh
- **license**: any_dpf_supported_increments