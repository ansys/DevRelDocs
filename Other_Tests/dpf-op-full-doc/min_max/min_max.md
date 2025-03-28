# min_max:over field

## Description

Compute the component-wise minimum (out 0) and maximum (out 1) over a field.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field_min (type: ['field']): 

- **Pin 1** field_max (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: min_max
- **license**: None