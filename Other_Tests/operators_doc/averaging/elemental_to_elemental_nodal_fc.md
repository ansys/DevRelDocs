# averaging:elemental to elemental nodal (fields container)

## Description

Transforms Elemental field to Elemental Nodal field.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: True): 

- **Pin 3** mesh_scoping (type: ['scoping']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_to_elemental_nodal_fc
- **full name**: averaging.elemental_to_elemental_nodal_fc
- **internal name**: elemental_to_elemental_nodal_fc
- **license**: None