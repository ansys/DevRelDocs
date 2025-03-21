# mesh:mesh extraction

## Description

Take a mesh and a scoping (elemental or nodal) and create a new mesh that contains this selection only.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: False): 

- **Pin 2** extension (type: ['int32']) (optional: True): Number of extension layer


## Outputs


- **Pin 0** abstract_meshed_region (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_extraction
- **full name**: mesh.mesh_extraction
- **internal name**: mesh_extraction
- **license**: None