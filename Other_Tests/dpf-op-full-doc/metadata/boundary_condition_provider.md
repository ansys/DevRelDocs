# metadata:boundary condition provider

## Description

Reads boundary conditions from the results files contained in the streams or data sources.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): 

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** results_info (type: ['field', 'fields_container']): results info


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: boundary_condition_provider
- **full name**: metadata.boundary_condition_provider
- **internal name**: boundary_conditions
- **license**: None