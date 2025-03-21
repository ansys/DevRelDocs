# utility:convert to fields container

## Description

Creates a fields container containing the field provided on pin 0.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): If a fields container is set in input, it is passed on as an output with the additional label space (if any).

- **Pin 1** label (type: ['label_space']) (optional: False): Sets a label space.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: field_to_fc
- **full name**: utility.field_to_fc
- **internal name**: InjectToFieldContainer
- **license**: None