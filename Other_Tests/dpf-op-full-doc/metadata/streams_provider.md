# metadata:streams provider

## Description

Creates streams (files with cache) from the data sources.

## Inputs


- **Pin 4** data_sources (type: ['data_sources']) (optional: False): 


## Outputs


- **Pin 0** streams_container (type: ['streams_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: streams_provider
- **full name**: metadata.streams_provider
- **internal name**: stream_provider
- **license**: None