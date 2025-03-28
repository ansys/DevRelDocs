# utility:voigt to standard strains

## Description

Converts the strain field from Voigt notation into standard format.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: strain_from_voigt
- **full name**: utility.strain_from_voigt
- **internal name**: strain_from_voigt
- **license**: None