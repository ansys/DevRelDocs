---
category: scoping
plugin: core
license: None
---

# scoping:nodes in mesh

## Description

Retrieves the nodal scoping of a given input mesh, which contains the node IDs.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 


## Outputs


- **Pin 0** mesh_scoping (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: nodal_from_mesh
- **full name**: scoping.nodal_from_mesh
- **internal name**: GetNodeScopingFromMesh
- **license**: None