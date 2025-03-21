---
category: invariant
plugin: core
license: None
---

# invariant:principal invariants (field)

## Description

Computes the element-wise Eigen values of a tensor field.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 


## Outputs


- **Pin 0** field_eig_1 (type: ['field']): first eigen value field

- **Pin 1** field_eig_2 (type: ['field']): second eigen value field

- **Pin 2** field_eig_3 (type: ['field']): third eigen value field


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: principal_invariants
- **full name**: invariant.principal_invariants
- **internal name**: invariants
- **license**: None