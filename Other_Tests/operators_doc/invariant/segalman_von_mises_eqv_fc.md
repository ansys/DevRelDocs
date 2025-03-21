---
category: invariant
plugin: core
license: any_dpf_supported_increments
---

# invariant:segalman von mises eqv (fields container)

## Description

Computes the element-wise Segalman Von-Mises criteria on all the tensor fields of a fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: segalman_von_mises_eqv_fc
- **full name**: invariant.segalman_von_mises_eqv_fc
- **internal name**: segalmaneqv_fc
- **license**: any_dpf_supported_increments