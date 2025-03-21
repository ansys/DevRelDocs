---
category: utility
plugin: core
license: None
---

# utility:bind support (fields container)

## Description

Ties a support to a fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** support (type: ['abstract_meshed_region', 'abstract_field_support', 'time_freq_support']) (optional: False): Meshed region or a support of the field.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: bind_support_fc
- **full name**: utility.bind_support_fc
- **internal name**: BindSupportFC
- **license**: None