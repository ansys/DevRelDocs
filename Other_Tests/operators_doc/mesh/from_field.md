# mesh:extract from field

## Description

Returns the meshed region contained in the support of the mesh.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: from_field
- **full name**: mesh.from_field
- **internal name**: GetSupportFromField
- **license**: None