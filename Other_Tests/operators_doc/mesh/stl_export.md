---
category: mesh
plugin: core
license: None
---

# mesh:stl export

## Description

export a mesh into a stl file.

## Inputs


- **Pin 0** mesh (type: ['abstract_meshed_region']) (optional: False): 

- **Pin 1** file_path (type: ['string']) (optional: False): 


## Outputs


- **Pin 0** data_sources (type: ['data_sources']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: stl_export
- **full name**: mesh.stl_export
- **internal name**: stl_export
- **license**: None