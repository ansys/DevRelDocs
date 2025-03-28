# utility:overlap fields

## Description

Take two fields and superpose them, the overlapping field will override values of base_field.

## Inputs


- **Pin 0** base_field (type: ['field']) (optional: True): 

- **Pin 1** overlapping_field (type: ['field']) (optional: True): 


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: overlap_fields
- **license**: None