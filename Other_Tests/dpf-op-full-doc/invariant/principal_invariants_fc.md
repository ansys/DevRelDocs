# invariant:principal invariants (fields container)

## Description

Computes the element-wise Eigen values of all the tensor fields of a fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_eig_1 (type: ['fields_container']): first eigen value fields

- **Pin 1** fields_eig_2 (type: ['fields_container']): second eigen value fields

- **Pin 2** fields_eig_3 (type: ['fields_container']): third eigen value fields


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: principal_invariants_fc
- **full name**: invariant.principal_invariants_fc
- **internal name**: invariants_fc
- **license**: None