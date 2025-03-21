# averaging:elemental to elemental nodal (field)

## Description

Transforms an Elemental field to an Elemental Nodal field.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): average only on these entities

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_to_elemental_nodal
- **full name**: averaging.elemental_to_elemental_nodal
- **internal name**: elemental_to_elemental_nodal
- **license**: None