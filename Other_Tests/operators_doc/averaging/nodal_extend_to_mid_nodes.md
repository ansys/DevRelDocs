---
category: averaging
plugin: core
license: None
---

# averaging:nodal extend to mid nodes (field)

## Description

Extends a Nodal field defined on corner nodes to a field defined also on mid nodes.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** node_scoping (type: ['scoping']) (optional: True): Nodes expected in output.

- **Pin 5** element_scoping (type: ['scoping']) (optional: True): Precomputed list of elements of interest (improves performances).

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **inplace** (type: ['bool']) (default: false): The output is written over the input to save memory if this config is set to true.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: nodal_extend_to_mid_nodes
- **full name**: averaging.nodal_extend_to_mid_nodes
- **internal name**: nodal_extend_to_mid_nodes
- **license**: None