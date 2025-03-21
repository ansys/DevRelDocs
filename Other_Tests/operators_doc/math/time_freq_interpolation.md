---
category: math
plugin: core
license: None
---

# math:time freq interpolation

## Description

Interpolates between all the matching fields of a fields container at given times or frequencies, using ramped: fieldOut = field1*(1.-fact)+field2*(fact), or stepped: fieldOut=field2. If the time freq is higher than the max available, the field at the max time freq is taken. Computes the output time freq support to support the fields container

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** time_freq_values (type: ['double', 'vector<double>', 'field']) (optional: False): list of frequencies or times needed. To specify load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps".

- **Pin 2** step (type: ['int32']) (optional: True): if a Field is set as input, the step ids should be its scoping.

- **Pin 3** interpolation_type (type: ['int32']) (optional: True): 1 is ramped, 2 is stepped, default is 1.

- **Pin 4** force_new_time_freq_support (type: ['bool']) (optional: True): If set to true, the output fields container will always have a new time freq support rescoped to the output time_freq_values (default is false). If set to false, the time freq support is only recreated when time or frequency values are between existing ones.

- **Pin 8** time_freq_support (type: ['time_freq_support']) (optional: True): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: time_freq_interpolation
- **license**: None