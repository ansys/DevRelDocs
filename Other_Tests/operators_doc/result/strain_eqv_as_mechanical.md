---
category: result
plugin: mechanical_results
license: None
---

# result:von mises strains as mechanical

## Description

Computes the equivalent (Von Mises) elastic strains and averages it to the nodes (by default). For multibody simulations, averaging across bodies can either be activated or deactivated.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): time/freq (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids use scoping with TimeFreq_steps location) required in output.

- **Pin 1** mesh_scoping (type: ['scoping', 'scopings_container']) (optional: True): nodes or elements scoping required in output.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data.

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container.

- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): prevents from reading the mesh in the results file.

- **Pin 9** requested_location (type: ['string']) (optional: True): average the elemental nodal result to the requested location (default is nodal).

- **Pin 13** poisson_ratio (type: ['int32', 'double']) (optional: True): Poisson ratio to be used in equivalent strain calculation.

- **Pin 14** read_cyclic (type: ['bool']) (optional: True): if true, cyclic expansion is done. If false, it's ignored.

- **Pin 200** average_across_bodies (type: ['bool']) (optional: True): for multibody simulations, the stresses are averaged across bodies if true or not if false (default).


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 

- **Pin 1** meshes_container (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mechanical_results
- **scripting name**: None
- **full name**: None
- **internal name**: strain_eqv_as_mechanical
- **license**: None