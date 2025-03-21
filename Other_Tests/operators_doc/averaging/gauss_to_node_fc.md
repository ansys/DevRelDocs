---
category: averaging
plugin: core
license: any_dpf_supported_increments
---

# averaging:gauss to node (fields container)

## Description

Extrapolates results available at Gauss or quadrature points to nodal points for a field container. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral. 

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): The mesh region in this pin is used for extrapolating results available at Gauss or quadrature points to nodal points.

- **Pin 3** scoping (type: ['scoping']) (optional: True): Extrapolating results on the selected scoping. If it is a scoping container, the label must correspond to the one of the fields containers.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: gauss_to_node_fc
- **full name**: averaging.gauss_to_node_fc
- **internal name**: gauss_to_node_fc
- **license**: any_dpf_supported_increments