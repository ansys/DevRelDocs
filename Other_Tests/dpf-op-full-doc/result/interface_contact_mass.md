# result:interface contact mass (LSDyna)

## Description

Read Interface Contact Mass (LSDyna) by calling the readers defined by the datasources.

## Inputs


- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 6** entity_scoping (type: ['scoping']) (optional: True): entity (part for matsum, interface for rcforc) where the result will be scoped

- **Pin 50** unit_system (type: ['int32', 'string', 'class dataProcessing::unit::CUnitSystem']) (optional: True): Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: interface_contact_mass
- **full name**: result.interface_contact_mass
- **internal name**: R_CMass
- **license**: None