---
category: metadata
plugin: mapdl
license: None
---

# metadata:cyclic support provider

## Description

Read the cyclic support (DPF entity containing necessary information for expansions) and expands the mesh.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): Streams containing the result file.

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): data sources containing the result file.

- **Pin 7** sector_meshed_region (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): mesh of the first sector.

- **Pin 15** expanded_meshed_region (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): if this pin is set, expanding the mesh is not necessary.

- **Pin 18** sectors_to_expand (type: ['scoping', 'scopings_container', 'vector<int32>']) (optional: True): sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.


## Outputs


- **Pin 0** cyclic_support (type: ['cyclic_support']): 

- **Pin 1** sector_meshes (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: metadata
- **plugin**: mapdl
- **scripting name**: cyclic_support_provider
- **full name**: metadata.cyclic_support_provider
- **internal name**: mapdl::rst::support_provider_cyclic
- **license**: None