---
category: averaging
plugin: core
license: None
---

# averaging:nodal to elemental (field)

## Description

Transforms a Nodal field to an Elemental field, The result is computed on a given element's scoping.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 

- **Pin 10** collapse_shell_layers (type: ['bool']) (optional: True): If true, shell layers are averaged as well (default is false).


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: nodal_to_elemental
- **full name**: averaging.nodal_to_elemental
- **internal name**: nodal_to_elemental
- **license**: None