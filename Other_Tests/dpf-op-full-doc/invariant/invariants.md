# invariant:scalar invariants (field)

## Description

Computes the element-wise invariants of a tensor field.

## Inputs


- **Pin 0** field (type: ['field']) (optional: False): 


## Outputs


- **Pin 0** field_int (type: ['field']): stress intensity field

- **Pin 1** field_eqv (type: ['field']): stress equivalent intensity

- **Pin 2** field_max_shear (type: ['field']): max shear stress field


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: invariant
- **plugin**: core
- **scripting name**: invariants
- **full name**: invariant.invariants
- **internal name**: invariants_deriv
- **license**: None