---
category: invariant
plugin: core
license: None
---

# invariant:von mises eqv (fields container)

## Description

Computes the element-wise Von-Mises criteria on all the tensor fields of a fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 13** poisson_ratio (type: ['double', 'int32']) (optional: False): Poisson ratio to be used in equivalent strain calculation.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: von_mises_eqv_fc
- **full name**: invariant.von_mises_eqv_fc
- **internal name**: eqv_fc
- **license**: None