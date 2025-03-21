---
category: result
plugin: core
license: any_dpf_supported_increments
---

# result:poynting vector surface

## Description

Compute the Poynting Vector surface integral

## Inputs


- **Pin 0** fields_containerA (type: ['fields_container']) (optional: False): 

- **Pin 1** fields_containerB (type: ['fields_container']) (optional: False): 

- **Pin 2** fields_containerC (type: ['fields_container']) (optional: False): 

- **Pin 3** fields_containerD (type: ['fields_container']) (optional: False): 

- **Pin 4** abstract_meshed_region (type: ['abstract_meshed_region']) (optional: True): the mesh region in this pin have to be boundary or skin mesh

- **Pin 5** int32 (type: ['int32']) (optional: True): load step number, if it's specified, the Poynting Vector is computed only on the substeps of this step


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: poynting_vector_surface
- **full name**: result.poynting_vector_surface
- **internal name**: PoyntingVectorSurface
- **license**: any_dpf_supported_increments