---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:elemental difference (field)

## Description

Transforms an Elemental Nodal or Nodal field into an Elemental field. Each elemental value is the maximum difference between the computed result for all nodes in this element. The result is computed on a given element scoping.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): average only on these entities

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 

- **Pin 10** through_layers (type: ['bool']) (optional: True): The maximum elemental difference is taken through the different shell layers if true (default is false).


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_difference
- **full name**: averaging.elemental_difference
- **internal name**: elemental_difference
- **license**: any_dpf_supported_increments