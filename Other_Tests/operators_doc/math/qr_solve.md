# math:qr solve

## Description

Computes the solution using QR factorization.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): fields_container

- **Pin 1** rhs (type: ['fields_container']) (optional: False): fields_container


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: qr_solve
- **full name**: math.qr_solve
- **internal name**: qrsolveOp
- **license**: any_dpf_supported_increments