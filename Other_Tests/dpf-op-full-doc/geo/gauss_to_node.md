# geo:gauss to node (field)

## Description

Extrapolating results available at Gauss or quadrature points to nodal points for one field. The available elements are: Linear quadrangle, parabolic quadrangle, linear hexagonal, quadratic hexagonal, linear tetrahedral, and quadratic tetrahedral 

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 

- **Pin 1** scoping (type: ['scoping']) (optional: True): Scoping to integrate on, if not provided, the one from input field is provided.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): Mesh to integrate on.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: gauss_to_node
- **full name**: geo.gauss_to_node
- **internal name**: gauss_to_node
- **license**: any_dpf_supported_increments