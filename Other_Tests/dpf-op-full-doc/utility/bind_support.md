# utility:bind support

## Description

Ties a support to a field.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** support (type: ['abstract_meshed_region', 'abstract_field_support']) (optional: False): meshed region or a support of the field


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: bind_support
- **full name**: utility.bind_support
- **internal name**: BindSupport
- **license**: None