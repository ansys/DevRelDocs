# averaging:elemental nodal to nodal elemental (field)

## Description

Transforms an Elemental Nodal field to Nodal Elemental. The result is computed on a given node's scoping.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_nodal_to_nodal_elemental
- **full name**: averaging.elemental_nodal_to_nodal_elemental
- **internal name**: ElementalNodal_To_NodalElemental
- **license**: None