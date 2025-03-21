# metadata:time freq provider

## Description

Reads the time/frequency support from the results files contained in the streams or data sources.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): streams (result file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): If the stream is null, retrieves the file path from the data sources.


## Outputs


- **Pin 0** time_freq_support (type: ['time_freq_support']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: time_freq_provider
- **full name**: metadata.time_freq_provider
- **internal name**: time_freq_support_provider
- **license**: None