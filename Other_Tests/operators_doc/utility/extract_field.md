---
category: utility
plugin: core
license: None
---

# utility:extract field

## Description

Extracts the fields at the indices defined in the vector (in 1) from the fields container (in 0).

## Inputs


- **Pin 0** fields_container (type: ['field', 'fields_container']) (optional: False): if a field is in input, it is passed on as an output

- **Pin 1** indices (type: ['vector<int32>']) (optional: True): Default is the first field


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: extract_field
- **full name**: utility.extract_field
- **internal name**: ExtractFromFC
- **license**: None