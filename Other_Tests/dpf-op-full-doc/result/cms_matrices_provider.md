# result:cms matrices provider

## Description

Read reduced matrices for cms elements. Extract stiffness, damping, mass matrices and load vector from a subfile.

## Inputs


- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data_sources (must contain at list one subfile).

- **Pin 200** matrix_form (type: ['bool']) (optional: False): If this pin i set to true, data are return as matrix form.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): Fields container containing in this order : stiffness, damping, mass matrices, and then load vector. But if pin 200 is set to true, it's in matrix form.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: cms_matrices_provider
- **full name**: result.cms_matrices_provider
- **internal name**: cms_matrices_provider
- **license**: None