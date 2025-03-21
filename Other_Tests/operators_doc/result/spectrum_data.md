# result:spectrum data

## Description

Read participation factors from mode file.

## Inputs


- **Pin 4** data_sources (type: ['data_sources']) (optional: False): Data_sources (must contain at least one mode file).


## Outputs


- **Pin 0** participation_factors (type: ['fields_container']): Fields container containing participation factors.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: mapdl
- **scripting name**: None
- **full name**: None
- **internal name**: spectrum_data
- **license**: None