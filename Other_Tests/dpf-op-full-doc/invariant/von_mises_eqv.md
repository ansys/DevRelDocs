# invariant:von mises eqv (field)

## Description

Computes the element-wise Von-Mises criteria on a tensor field.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 13** poisson_ratio (type: ['double', 'int32']) (optional: False): Poisson ratio to be used in equivalent strain calculation.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: von_mises_eqv
- **full name**: invariant.von_mises_eqv
- **internal name**: eqv
- **license**: None