---
category: math
plugin: core
license: None
---

# math:derivate (complex fields)

## Description

Derives field containers containing complex fields.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **inplace** (type: ['bool']) (default: false): The output is written over the input to save memory if this config is set to true.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: cplx_derive
- **license**: None