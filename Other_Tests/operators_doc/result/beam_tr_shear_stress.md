# result:beam TR shear stress (LSDyna)

## Description

Read Beam TR Shear Stress (LSDyna) by calling the readers defined by the datasources.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'int32', 'vector<int32>', 'double', 'field', 'vector<double>']) (optional: True): time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files.

- **Pin 1** mesh_scoping (type: ['scopings_container', 'scoping']) (optional: True): elements scoping required in output.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 6** integration_point (type: ['int32']) (optional: True): integration point where the result will be read from. Default value: 0 (first integration point).

- **Pin 50** unit_system (type: ['int32', 'string', 'class dataProcessing::unit::CUnitSystem']) (optional: True): Unit System ID (int), semicolon-separated list of base unit strings (str) or UnitSystem instance


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: beam_tr_shear_stress
- **full name**: result.beam_tr_shear_stress
- **internal name**: B_ST2
- **license**: None