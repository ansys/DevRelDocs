# scoping:connectivity ids

## Description

Returns the ordered node ids corresponding to the element ids scoping in input. For each element the node ids are its connectivity.

## Inputs


- **Pin 1** mesh_scoping (type: ['scoping']) (optional: False): Elemental scoping

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): the support of the scoping is expected if there is no mesh in input

- **Pin 10** take_mid_nodes (type: ['bool']) (optional: True): default is true


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping']): 

- **Pin 1** elemental_scoping (type: ['scoping']): same as the input scoping but with ids duplicated to have the same size as nodal output scoping


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: connectivity_ids
- **full name**: scoping.connectivity_ids
- **internal name**: scoping::connectivity_ids
- **license**: None