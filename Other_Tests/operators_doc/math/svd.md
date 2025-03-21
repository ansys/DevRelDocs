---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:svd

## Description

Computes the matrix singular value decomposition (SVD) for each field in the given fields container.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): fields_container


## Outputs


- **Pin 0** s_svd (type: ['fields_container']): Singular values of the input data, where A=U.S.Vt

- **Pin 1** u_svd (type: ['fields_container']): U of the input data, where A=U.S.Vt

- **Pin 2** vt_svd (type: ['fields_container']): Vt of the input data, where A=U.S.Vt


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: svd
- **full name**: math.svd
- **internal name**: svdOp
- **license**: any_dpf_supported_increments