# averaging:force_summation

## Description

Computes the sum of elemental forces contribution on a set of nodes in Global Coordinate System. Equivalent to MAPDL FSUM & NFORCE commands. Supports Static, Transient, Modal & Harmonic analysis for thermal and structural degrees of freedom.

## Inputs


- **Pin 0** time_scoping (type: ['scoping']) (optional: True): default = all time steps

- **Pin 1** nodal_scoping (type: ['scoping']) (optional: True): Nodal Scoping. Set of nodes in which elemental contribution forces will be accumulated (default = all nodes)

- **Pin 2** elemental_scoping (type: ['scoping']) (optional: True): Elemental Scoping. Set of elements contributing to the force calcuation. (default = all elements)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 

- **Pin 5** force_type (type: ['int32']) (optional: True): Type of force to be processed (0 - default: Total forces (static, damping, and inertia)., 1: Static forces, 2: Damping forces, 3: Inertia forces)

- **Pin 6** spoint (type: ['field']) (optional: True): Coordinate field of a point for moment summations. Defaults to (0,0,0).


## Outputs


- **Pin 0** force_accumulation (type: ['fields_container']): 

- **Pin 1** moment_accumulation (type: ['fields_container']): 

- **Pin 2** heat_accumulation (type: ['fields_container']): 

- **Pin 10** forces_on_nodes (type: ['fields_container']): 

- **Pin 11** moments_on_nodes (type: ['fields_container']): 

- **Pin 12** heats_on_nodes (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: force_summation
- **full name**: averaging.force_summation
- **internal name**: force_summation
- **license**: any_dpf_supported_increments