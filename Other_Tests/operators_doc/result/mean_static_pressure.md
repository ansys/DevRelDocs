# result:mean static pressure

## Description

Read Mean Static Pressure by calling the readers defined by the datasources.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'int32', 'vector<int32>', 'double', 'field', 'vector<double>']) (optional: True): time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files.

- **Pin 1** mesh_scoping (type: ['scopings_container', 'scoping']) (optional: True): nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): prevents from reading the mesh in the result files

- **Pin 25** region_scoping (type: ['scoping', 'int32', 'vector<int32>']) (optional: True): region id (integer) or vector of region ids (vector) or region scoping (scoping) of the model (region corresponds to zone for Fluid results or part for LSDyna results).

- **Pin 1000** qualifiers (type: ['label_space']) (optional: True): (for Fluid results only) LabelSpace with combination of zone, phases or species ids


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: mean_static_pressure
- **full name**: result.mean_static_pressure
- **internal name**: P_SA
- **license**: None