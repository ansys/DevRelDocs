# scoping:adapt with scopings container

## Description

Rescopes/splits a fields container to correspond to a scopings container.

## Inputs


- **Pin 0** field_or_fields_container (type: ['fields_container', 'field']) (optional: False): 

- **Pin 1** scopings_container (type: ['scopings_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: scoping
- **plugin**: core
- **scripting name**: change_fc
- **full name**: scoping.change_fc
- **internal name**: rescope_fc
- **license**: None