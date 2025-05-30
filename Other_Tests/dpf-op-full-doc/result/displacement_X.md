# result:displacement X

## Description

Read/compute nodal displacements X component of the vector (1st component) by calling the readers defined by the datasources.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'int32', 'vector<int32>', 'double', 'field', 'vector<double>']) (optional: True): time/freq values (use doubles or field), time/freq set ids (use ints or scoping) or time/freq step ids (use scoping with TimeFreq_steps location) required in output. To specify time/freq values at specific load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". Linear time freq intrapolation is performed if the values are not in the result files and the data at the max time or freq is taken when time/freqs are higher than available time/freqs in result files.

- **Pin 1** mesh_scoping (type: ['scopings_container', 'scoping']) (optional: True): nodes or elements scoping required in output. The output fields will be scoped on these node or element IDs. To figure out the ordering of the fields data, look at their scoping IDs as they might not be ordered as the input scoping was. The scoping's location indicates whether nodes or elements are asked for. Using scopings container allows you to split the result fields container into domains

- **Pin 2** fields_container (type: ['fields_container']) (optional: True): FieldsContainer already allocated modified inplace

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 5** bool_rotate_to_global (type: ['bool']) (optional: True): if true the field is rotated to global coordinate system (default true)

- **Pin 7** mesh (type: ['abstract_meshed_region', 'meshes_container']) (optional: True): prevents from reading the mesh in the result files

- **Pin 14** read_cyclic (type: ['enum dataProcessing::ECyclicReading', 'int32']) (optional: True): if 0 cyclic symmetry is ignored, if 1 cyclic sector is read, if 2 cyclic expansion is done, if 3 cyclic expansion is done and stages are merged (default is 1)


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: displacement_X
- **full name**: result.displacement_X
- **internal name**: UX
- **license**: None