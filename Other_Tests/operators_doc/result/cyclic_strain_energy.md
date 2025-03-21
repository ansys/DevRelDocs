---
category: result
plugin: mapdl
license: None
---

# result:cyclic strain energy

## Description

Computes mapdl::rst::ENG_SE from an rst file.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scopings_container', 'scoping', 'vector<int32>']) (optional: True): 

- **Pin 2** fields_container (type: ['fields_container']) (optional: True): FieldsContainer already allocated modified inplace

- **Pin 3** streams_container (type: ['streams_container', 'stream']) (optional: True): Streams containing the result file.

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): data sources containing the result file.

- **Pin 5** bool_rotate_to_global (type: ['bool']) (optional: True): if true the field is rotated to global coordinate system (default true)

- **Pin 6** all_dofs (type: ['bool']) (optional: True): if this pin is set to true, all the dofs are retrieved. By default this pin is set to false and only the translational dofs are retrieved.

- **Pin 7** sector_mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): mesh of the base sector (can be a skin).

- **Pin 14** read_cyclic (type: ['enum dataProcessing::ECyclicReading', 'int32']) (optional: True): if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1)

- **Pin 15** expanded_meshed_region (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): mesh expanded.

- **Pin 16** cyclic_support (type: ['cyclic_support']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): FieldsContainer filled in

- **Pin 1** expanded_meshes (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: cyclic_strain_energy
- **full name**: result.cyclic_strain_energy
- **internal name**: mapdl::rst::ENG_SE_cyclic
- **license**: None