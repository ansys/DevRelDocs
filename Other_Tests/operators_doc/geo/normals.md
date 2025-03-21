---
category: geo
plugin: core
license: any_dpf_supported_increments
---

# geo:scoping normals

## Description

compute the normals at the given nodes or element scoping based on the given mesh (first version, the element normal is only handled on the shell elements)

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 3** field (type: ['field']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: normals
- **full name**: geo.normals
- **internal name**: normals_provider
- **license**: any_dpf_supported_increments