# mesh:acmo mesh provider

## Description

Converts an Assembly Mesh into a DPF Meshes container

## Inputs


- **Pin 0** assembly_mesh (type: ['ans_dispatch_holder', 'struct IAnsDispatch']) (optional: False): 

- **Pin 1** unit (type: ['string']) (optional: True): 


## Outputs


- **Pin 0** meshes_container (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: acmo_mesh_provider
- **license**: None