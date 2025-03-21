---
category: metadata
plugin: core
license: None
---

# metadata:mesh support provider

## Description

Reads the mesh support.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): Streams (result file container) (optional).

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): If the stream is null, retrieves the file path from the data sources.


## Outputs


- **Pin 0** abstract_field_support (type: ['abstract_field_support']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: mesh_support_provider
- **full name**: metadata.mesh_support_provider
- **internal name**: mesh_support_provider
- **license**: None