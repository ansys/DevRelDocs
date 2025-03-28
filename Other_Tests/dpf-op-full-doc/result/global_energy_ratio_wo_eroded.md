# result:global energy ratio without eroded energy (LSDyna)

## Description

Read Global Energy ratio without Eroded Energy (LSDyna) by calling the readers defined by the datasources.

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
- **scripting name**: global_energy_ratio_wo_eroded
- **full name**: result.global_energy_ratio_wo_eroded
- **internal name**: GLOB_ENG_ER
- **license**: None