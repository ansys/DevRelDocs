# serialization:vtk to fields

## Description

Write a field based on a vtk file.

## Inputs


- **Pin 0** field_name (type: ['string']) (optional: True): name of the field in the vtk file

- **Pin 3** streams (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): fields_container


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: serialization
- **plugin**: vtk
- **scripting name**: vtk_to_fields
- **full name**: serialization.vtk_to_fields
- **internal name**: vtk::vtk::FieldProvider
- **license**: None