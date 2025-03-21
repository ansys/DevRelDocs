---
category: result
plugin: core
license: None
---

# result:rigid transformation

## Description

Extracts rigid body motions from a displacement in input.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): streams (result file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): If the stream is null, retrieves the file path from the data sources.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: rigid_transformation
- **full name**: result.rigid_transformation
- **internal name**: rigid_transformation_provider
- **license**: None