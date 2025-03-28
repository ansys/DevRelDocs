# math:kronecker product

## Description

Computes element-wise Kronecker product between two tensor fields.

## Inputs


- **Pin 0** fieldA (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** fieldB (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: kronecker_prod
- **license**: None