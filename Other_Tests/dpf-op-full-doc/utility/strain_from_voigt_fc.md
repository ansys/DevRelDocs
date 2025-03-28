# utility:voigt to standard strains (fields container)

## Description

Converts the strain field from Voigt notation into standard format.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: strain_from_voigt_fc
- **full name**: utility.strain_from_voigt_fc
- **internal name**: strain_from_voigt_fc
- **license**: None