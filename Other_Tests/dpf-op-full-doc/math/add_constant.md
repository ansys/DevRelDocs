# math:+ constant (field)

## Description

Computes the sum of a field (in 0) and a scalar (in 1).

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** ponderation (type: ['double', 'vector<double>']) (optional: False): double or vector of double


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: add_constant
- **full name**: math.add_constant
- **internal name**: add_constant
- **license**: None