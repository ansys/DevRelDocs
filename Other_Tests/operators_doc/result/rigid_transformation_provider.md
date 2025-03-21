---
category: result
plugin: mapdl
license: None
---

# result:rigid transformation provider

## Description

Extracts rigid body transformation from dsub file.

## Inputs


- **Pin 3** streams (type: ['stream']) (optional: True): streams (result file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): data source of dsub file.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: rigid_transformation_provider
- **full name**: result.rigid_transformation_provider
- **internal name**: mapdl::dsub::rigid_transformation_provider
- **license**: None