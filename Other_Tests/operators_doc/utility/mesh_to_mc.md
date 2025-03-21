---
category: utility
plugin: core
license: None
---

# utility:convert to meshes container

## Description

Creates a meshes container containing the mesh provided on pin 0.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: False): If a meshes container is set in input, it is passed on as an output with the additional label space (if any).

- **Pin 1** label (type: ['label_space']) (optional: False): Sets a label space.


## Outputs


- **Pin 0** meshes_container (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: mesh_to_mc
- **full name**: utility.mesh_to_mc
- **internal name**: InjectToMeshesContainer
- **license**: None