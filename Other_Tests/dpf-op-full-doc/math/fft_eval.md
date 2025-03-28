# math:fft evaluation

## Description

Evaluate the fast fourier transforms at a given set of fields.

## Inputs


- **Pin 0** field_t (type: ['field']) (optional: False): field of values to evaluate

- **Pin 1** time_scoping (type: ['scoping']) (optional: True): if specified only the results at these set ids are used


## Outputs


- **Pin 0** field (type: ['field']): 

- **Pin 2** offset (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: fft_eval
- **full name**: math.fft_eval
- **internal name**: fft_eval
- **license**: any_dpf_supported_increments