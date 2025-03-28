# result:compute stress Y

## Description

Computes the stress from an elastic strain field. compute_total_strain limitations are applicable for stress computation Get the YY normal component (11 component).

## Inputs


- **Pin 1** scoping (type: ['scoping']) (optional: True): The element scoping on which the result is computed.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): Needed to get mesh and material ids. Optional if a data_sources have been connected.

- **Pin 4** data_sources (type: ['data_sources']) (optional: True): Needed to get mesh and material ids. Optional if a streams_container have been connected.

- **Pin 9** requested_location (type: ['string']) (optional: True): Average the Elemental Nodal result to the requested location.

- **Pin 10** strain (type: ['fields_container', 'field']) (optional: False): Field/or fields container containing only the elastic strain field (element nodal).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): The computed result fields container (elemental nodal).


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: result
- **plugin**: live post
- **scripting name**: compute_stress_Y
- **full name**: result.compute_stress_Y
- **internal name**: compute_stress_Y
- **license**: None