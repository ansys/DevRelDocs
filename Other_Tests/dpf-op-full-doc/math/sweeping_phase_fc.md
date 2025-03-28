# math:sweeping phase (fields container)

## Description

Shifts the phase of all the corresponding real and imaginary fields of a fields container for a given angle (in 2) of a unit (in 4).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 2** angle (type: ['double']) (optional: False): 

- **Pin 3** unit_name (type: ['string']) (optional: True): String Unit. Supported values: "deg" or "rad". Default: "rad".

- **Pin 4** abs_value (type: ['bool']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: sweeping_phase_fc
- **license**: None