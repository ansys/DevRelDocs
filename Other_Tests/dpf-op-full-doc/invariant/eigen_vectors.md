# invariant:eigen vectors (on field)

## Description

Computes the element-wise Eigen vectors for each tensor in the field.

## Inputs


- **Pin 0** field (type: ['fields_container', 'field']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: invariant
- **plugin**: mapdl
- **scripting name**: eigen_vectors
- **full name**: invariant.eigen_vectors
- **internal name**: eig_vectors
- **license**: None