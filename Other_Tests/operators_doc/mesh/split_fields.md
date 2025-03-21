---
category: mesh
plugin: core
license: any_dpf_supported_increments
---

# mesh:split field wrt mesh regions

## Description

Split the input field or fields container based on the input mesh regions 

## Inputs


- **Pin 0** field_or_fields_container (type: ['field', 'fields_container']) (optional: False): 

- **Pin 1** meshes (type: ['meshes_container']) (optional: False): body meshes in the mesh controller cannot be mixed shell/solid


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: split_fields
- **full name**: mesh.split_fields
- **internal name**: split_fields
- **license**: any_dpf_supported_increments