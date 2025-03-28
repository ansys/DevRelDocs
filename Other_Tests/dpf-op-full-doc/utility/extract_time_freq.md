# utility:extract time freq

## Description

Extract timefreqs with sets scoping from a time freq support

## Inputs


- **Pin 0** time_freq_support (type: ['time_freq_support']) (optional: False): 

- **Pin 1** time_scoping (type: ['scoping']) (optional: True): 

- **Pin 2** real_or_complex (type: ['bool']) (optional: True): False for real only (default). True for complex output.


## Outputs


- **Pin 0** field (type: ['field', 'fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: extract_time_freq
- **full name**: utility.extract_time_freq
- **internal name**: extract_time_freq
- **license**: None