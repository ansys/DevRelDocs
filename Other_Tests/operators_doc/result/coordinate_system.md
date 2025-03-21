# result:coordinate system

## Description

Extracts the Rotation Matrix and Origin of a specific coordinate system

## Inputs


- **Pin 0** cs_id (type: ['int32']) (optional: False): 

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** field (type: ['field']): the first 9 double are the rotation (3x3 matrix) and the last 3 is the translation vector


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: coordinate_system
- **full name**: result.coordinate_system
- **internal name**: mapdl::rst::CS
- **license**: None