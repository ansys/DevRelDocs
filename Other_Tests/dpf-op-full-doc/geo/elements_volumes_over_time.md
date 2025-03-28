# geo:elements volumes over time

## Description

Calculates for a mesh, the volume of each element over time for each specified time step.

## Inputs


- **Pin 1** scoping (type: ['scoping']) (optional: True): 

- **Pin 2** displacement (type: ['fields_container']) (optional: True): Displacement field's container. Must contain the mesh if mesh not specified in input.

- **Pin 7** mesh (type: ['abstract_meshed_region']) (optional: True): Mesh must be defined if the displacement field's container does not contain it, or if there is no displacement.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: geo
- **plugin**: core
- **scripting name**: elements_volumes_over_time
- **full name**: geo.elements_volumes_over_time
- **internal name**: volumes_provider
- **license**: any_dpf_supported_increments