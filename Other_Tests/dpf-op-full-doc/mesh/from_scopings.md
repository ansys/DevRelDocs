# mesh:from scopings

## Description

Extracts multiple meshed region base on a scoping and saved in a MeshesContainer

## Inputs


- **Pin 1** scopings_container (type: ['scopings_container']) (optional: False): if nodal scoping, then the scoping is transposed respecting the inclusive pin

- **Pin 2** inclusive (type: ['int32']) (optional: True): if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included

- **Pin 3** nodes_only (type: ['bool']) (optional: True): returns mesh with nodes only (without any elements). Default is false.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** meshes (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: from_scopings
- **full name**: mesh.from_scopings
- **internal name**: meshes::by_scopings
- **license**: any_dpf_supported_increments