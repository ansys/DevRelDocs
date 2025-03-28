# mesh:meshes provider

## Description

Reads meshes from result files. Meshes can be spatially or temporally varying.

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>', 'int32']) (optional: True): Time/frequency set IDs required in output.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 14** read_cyclic (type: ['enum dataProcessing::ECyclicReading', 'int32']) (optional: True): if 1, cyclic symmetry is ignored. If 2, cyclic expansion is done (default is 1).

- **Pin 25** region_scoping (type: ['scoping', 'int32', 'vector<int32>']) (optional: True): region id (integer) or vector of region ids (vector) or region scoping (scoping) of the model (region corresponds to zone for Fluid results or part for LSDyna results).


## Outputs


- **Pin 0** meshes (type: ['meshes_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: meshes_provider
- **full name**: mesh.meshes_provider
- **internal name**: meshes_provider
- **license**: None