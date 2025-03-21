# mesh:from scoping

## Description

Extracts a meshed region from another meshed region based on a scoping. Regarding the property fields of the meshed region: the 'Elemental', 'Face', and 'Nodal' property fields are scoped to the elements or nodes of the output mesh, the 'Global' property fields are transferred from the input mesh to the output mesh without changes, and the rest of the property fields are not present in the output mesh.

## Inputs


- **Pin 1** scoping (type: ['scoping']) (optional: False): if nodal scoping, then the scoping is transposed respecting the inclusive pin

- **Pin 2** inclusive (type: ['int32']) (optional: True): if inclusive == 1 then all the elements/faces adjacent to the nodes ids in input are added, if inclusive == 0, only the elements/faces which have all their nodes in the scoping are included

- **Pin 3** nodes_only (type: ['bool']) (optional: True): returns mesh with nodes only (without any elements or property fields). Default is false.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: from_scoping
- **full name**: mesh.from_scoping
- **internal name**: mesh::by_scoping
- **license**: any_dpf_supported_increments