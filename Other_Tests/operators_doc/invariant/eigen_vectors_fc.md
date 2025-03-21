---
category: invariant
plugin: mapdl
license: None
---

# invariant:eigen vectors (on fields container)

## Description

Computes the element-wise Eigen vectors for each tensor in the fields of the field container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container', 'field']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: mapdl
- **scripting name**: eigen_vectors_fc
- **full name**: invariant.eigen_vectors_fc
- **internal name**: eig_vectors_fc
- **license**: None