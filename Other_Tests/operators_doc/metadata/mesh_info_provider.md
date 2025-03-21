# metadata:mesh info provider

## Description

Reads the mesh information, such as number of elements (common property), number of faces (Cff plugins) or scoping of parts (LSDYNA plugins) on files contained in the streams or data sources.

## Inputs


- **Pin 0** time_scoping (type: ['int32']) (optional: True): Optional time/frequency set ID of the mesh.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): streams (mesh file container) (optional)

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): If the stream is null, retrieves the file path from the data sources.


## Outputs


- **Pin 0** mesh_info (type: ['generic_data_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: metadata
- **plugin**: core
- **scripting name**: mesh_info_provider
- **full name**: metadata.mesh_info_provider
- **internal name**: mesh_info_provider
- **license**: None