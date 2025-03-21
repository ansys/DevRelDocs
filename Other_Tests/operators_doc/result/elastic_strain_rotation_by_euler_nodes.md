---
category: result
plugin: mapdl
license: None
---

# result:elastic strain solution to global cs

## Description

read Euler angles on elements from the rst file and rotate the fields in the fieldsContainer.

## Inputs


- **Pin 2** fields_container (type: ['fields_container']) (optional: True): 

- **Pin 3** streams_container (type: ['streams_container', 'stream', 'class dataProcessing::CRstFileWrapper']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: elastic_strain_rotation_by_euler_nodes
- **full name**: result.elastic_strain_rotation_by_euler_nodes
- **internal name**: mapdl::rst::EPEL_rotation_by_euler_nodes
- **license**: None