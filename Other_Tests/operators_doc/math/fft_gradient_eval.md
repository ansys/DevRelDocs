# math:fft gradient evaluation

## Description

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** time_scoping (type: ['scoping']) (optional: True): if specified only the results at these set ids are used

- **Pin 2** fs_ratio (type: ['int32']) (optional: True): default value = 20


## Outputs


- **Pin 0** coefficients (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: fft_gradient_eval
- **full name**: math.fft_gradient_eval
- **internal name**: fft_eval_gr
- **license**: any_dpf_supported_increments