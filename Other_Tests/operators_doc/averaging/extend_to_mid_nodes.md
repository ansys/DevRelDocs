---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:extend to mid nodes (field)

## Description

Extends an Elemental Nodal or Nodal field defined on corner nodes to a field defined also on the mid nodes.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **inplace** (type: ['bool']) (default: false): The output is written over the input to save memory if this configuration is set to true. Only supported for nodal fields in input.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: extend_to_mid_nodes
- **full name**: averaging.extend_to_mid_nodes
- **internal name**: extend_to_mid_nodes
- **license**: any_dpf_supported_increments