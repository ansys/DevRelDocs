---
category: invariant
plugin: core
license: None
---

# invariant:scalar invariants (fields container)

## Description

Computes the element-wise invariants of all the tensor fields of a fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_int (type: ['fields_container']): stress intensity field

- **Pin 1** fields_eqv (type: ['fields_container']): stress equivalent intensity

- **Pin 2** fields_max_shear (type: ['fields_container']): max shear stress field


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: invariants_fc
- **full name**: invariant.invariants_fc
- **internal name**: invariants_deriv_fc
- **license**: None