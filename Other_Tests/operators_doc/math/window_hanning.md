---
category: math
plugin: core
license: None
---

# math:window hanning

## Description

Apply hanning windowing on a given FieldsContainer having time label or a Field located on time. Assume that time sampling is evenly spaced (use time_freq_interpolation before otherwise).

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): 


## Outputs


- **Pin 0** field (type: ['field', 'fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: window_hanning
- **full name**: math.window_hanning
- **internal name**: window::hanning
- **license**: None