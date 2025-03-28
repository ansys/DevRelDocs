# math:scale (fields container)

## Description

Scales a field by a constant factor.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** ponderation (type: ['double', 'field']) (optional: False): Double/Field scoped on overall

- **Pin 2** boolean (type: ['bool']) (optional: True): Default is false. If set to true, output of scale is made dimensionless


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: scale_fc
- **license**: None