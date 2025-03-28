# scoping:from mesh

## Description

Provides the entire mesh scoping based on the requested location

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** requested_location (type: ['string']) (optional: True): if nothing the operator returns the nodes scoping, possible locations are: Nodal(default) or Elemental


## Outputs


- **Pin 0** scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: from_mesh
- **full name**: scoping.from_mesh
- **internal name**: MeshScopingProvider
- **license**: None