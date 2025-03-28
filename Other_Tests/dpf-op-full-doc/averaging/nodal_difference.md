# averaging:nodal difference (field)

## Description

Transforms an Elemental Nodal field into a Nodal field. Each nodal value is the maximum difference between the unaveraged computed result for all elements that share this particular node. The result is computed on a given node's scoping.

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
- **scripting name**: nodal_difference
- **full name**: averaging.nodal_difference
- **internal name**: nodal_difference
- **license**: any_dpf_supported_increments