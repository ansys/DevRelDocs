# metadata:cyclic mesh expansion

## Description

Expand the mesh.

## Inputs


- **Pin 7** sector_meshed_region (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): 

- **Pin 16** cyclic_support (type: ['cyclic_support']) (optional: False): 

- **Pin 18** sectors_to_expand (type: ['vector<int32>', 'scoping', 'scopings_container']) (optional: True): sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.


## Outputs


- **Pin 0** meshed_region (type: ['abstract_meshed_region']): expanded meshed region.

- **Pin 1** cyclic_support (type: ['cyclic_support']): input cyclic support modified in place containing the new expanded meshed regions.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: cyclic_mesh_expansion
- **full name**: metadata.cyclic_mesh_expansion
- **internal name**: cyclic_expansion_mesh
- **license**: None