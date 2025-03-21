# math:fft multi harmonic solution minmax

## Description

Evaluate min max fields on multi harmonic solution. min and max fields are calculated based on evaluating a fourier series sum wrt rpms and using the gradient method for adaptive time steping

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** rpm_scoping (type: ['scoping']) (optional: True): rpm scoping, by default the fourier series sum is evaluated using all the rpms

- **Pin 2** fs_ratio (type: ['int32']) (optional: True): field or fields container with only one field is expected

- **Pin 3** num_subdivisions (type: ['int32']) (optional: True): connect number subdivisions, used for uniform discretization

- **Pin 4** max_num_subdivisions (type: ['int32']) (optional: True): connect max number subdivisions, used to avoid huge number of sudivisions

- **Pin 5** num_cycles (type: ['int32']) (optional: True): Number of cycle of the periodic signal (default is 2)

- **Pin 6** use_harmonic_zero (type: ['bool']) (optional: True): use harmonic zero for first rpm (default is false)

- **Pin 7** calculate_time_series (type: ['bool']) (optional: True): calculates time series output (output pin 2), setting it to false enhance performance if only min/max are required (default is true)

- **Pin 8** substeps_selector (type: ['vector<int32>']) (optional: True): substeps to evaluate (frequencies), by default the operator is evaluated using all the available steps


## Outputs


- **Pin 0** field_min (type: ['fields_container']): 

- **Pin 1** field_max (type: ['fields_container']): 

- **Pin 2** all_fields (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: fft_multi_harmonic_minmax
- **full name**: math.fft_multi_harmonic_minmax
- **internal name**: fft_multi_harmonic_minmax
- **license**: any_dpf_supported_increments