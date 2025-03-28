# result:global sliding interface energy (LSDyna)

## Description

Read Global Sliding Interface Energy (LSDyna) by calling the readers defined by the datasources.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 50** unit_system (type: ['int32', 'string', 'class dataProcessing::unit::CUnitSystem']) (optional: True): Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: global_sliding_interface_energy
- **full name**: result.global_sliding_interface_energy
- **internal name**: GLOB_SIE
- **license**: None