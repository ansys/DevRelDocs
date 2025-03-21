---
category: averaging
plugin: core
license: None
---

# averaging:elemental nodal to nodal (field)

## Description

Transforms an Elemental Nodal field into a Nodal field using an averaging process. The result is computed on a given node's scoping.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** mesh_scoping (type: ['scoping']) (optional: True): average only on these entities

- **Pin 2** should_average (type: ['bool']) (optional: True): Each nodal value is divided by the number of elements linked to this node (default is true for discrete quantities).

- **Pin 4** extend_to_mid_nodes (type: ['bool']) (optional: True): Compute mid nodes (when available) by averaging the neighbour primary nodes.

- **Pin 5** extend_weights_to_mid_nodes (type: ['bool']) (optional: True): Extends weights to mid nodes (when available). Default is false.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 

- **Pin 1** weight (type: ['property_field']): Provides the number of times it was found in the elemental nodal field, for each node. Can be used to average later.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: elemental_nodal_to_nodal
- **full name**: averaging.elemental_nodal_to_nodal
- **internal name**: elemental_nodal_To_nodal
- **license**: None