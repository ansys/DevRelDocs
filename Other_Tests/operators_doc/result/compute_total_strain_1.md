---
category: result
plugin: live post
license: None
---

# result:compute total strain 1

## Description

Computes the strain from a displacement field.
Only SOLID185 (B-Bar, Simplified Enhanced Strain, Enhanced Strain formulations), SOLID186 (Full Integration) & SOLID187 elements are supported.
Layered elements are not supported.
Thermal strains are not supported.
Only one value of material properties are allowed per element for isotropic and orthotropic elasticity. Material nonlinearity is not supported
Only linear analysis are supported without On Demand Expansion.
All coordinates are global coordinates.
Euler Angles need to be included in the database.
 Get the 1st principal component.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'int32', 'vector<int32>', 'double', 'field', 'vector<double>']) (optional: True): time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files.. Will only be used if no displacement input is given (will be applied on displacement operator).

- **Pin 1** scoping (type: ['scoping']) (optional: True): The element scoping on which the result is computed.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): Optional if a mesh or a data_sources have been connected. Required if no displacement input have been connected.

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Optional if a mesh or a streams_container have been connected, or if the displacement's field has a mesh support. Required if no displacement input have been connected.

- **Pin 5** extrapolate (type: ['int32']) (optional: True): Whether to extrapolate the data from the integration points to the nodes.

- **Pin 6** nonlinear (type: ['int32']) (optional: True): Whether to use nonlinear geometry or nonlinear material (1 = large strain, 2 = hyperelasticity).

- **Pin 7** abstract_meshed_region (type: ['abstract_meshed_region']) (optional: True): The underlying mesh. Optional if a data_sources or a streams_container have been connected, or if the displacement's field has a mesh support.

- **Pin 9** requested_location (type: ['string']) (optional: True): Average the Elemental Nodal result to the requested location.

- **Pin 10** displacement (type: ['fields_container', 'field']) (optional: True): Field/or fields container containing only the displacement field (nodal). If none specified, read displacements from result file using the data_sources.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): The computed result fields container (elemental nodal).


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: result
- **plugin**: live post
- **scripting name**: compute_total_strain_1
- **full name**: result.compute_total_strain_1
- **internal name**: compute_total_strain_1
- **license**: None