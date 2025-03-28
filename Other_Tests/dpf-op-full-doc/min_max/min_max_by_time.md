# min_max:min max over time

## Description

Evaluates minimum, maximum by time or frequency over all the entities of each field

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 2** compute_absolute_value (type: ['bool']) (optional: True): Calculate the absolute value of field entities before computing the min/max.


## Outputs


- **Pin 0** min (type: ['fields_container']): 

- **Pin 1** max (type: ['fields_container']): 


## Configurations


- **incremental** (type: ['bool']) (default: true): This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: min_max_by_time
- **license**: None