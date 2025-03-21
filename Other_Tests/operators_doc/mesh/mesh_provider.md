# mesh:mesh provider

## Description

Reads a mesh from result files.

## Inputs


- **Pin 0** time_scoping (type: ['int32']) (optional: True): Optional time/frequency set ID of the mesh, supported for adaptative meshes.

- **Pin 3** streams_container (type: ['streams_container']) (optional: True): result file container allowed to be kept open to cache data

- **Pin 4** data_sources (type: ['data_sources']) (optional: False): result file path container, used if no streams are set

- **Pin 14** read_cyclic (type: ['enum dataProcessing::ECyclicReading', 'int32']) (optional: True): If 1, cyclic symmetry is ignored. If 2, cyclic expansion is done (default is 1).

- **Pin 25** region_scoping (type: ['scoping', 'int32', 'vector<int32>']) (optional: True): region id (integer) or vector of region ids with one entity (vector) or region scoping with one id (scoping) (region corresponds to zone for Fluid results or part for LSDyna results).

- **Pin 200** laziness (type: ['abstract_data_tree']) (optional: True): configurate whether lazy evaluation can be performed and to what extent. Supported attributes are: 
- "num_named_selections"->num named selection to read (-1 is all, int32, default si -1), careful: the other named selections will not be available, use mesh_property_provider Operator to read them.
- all mesh property fields "mat", "named_selection", "apdl_element_type", "section"-> if set to 1 these properties will not be read and a workflow will be bounded to the properties to be evaluated on demand, with 0 they are read (default is 0).
- "all_available_properties" option set to 0 will return all possible properties


## Outputs


- **Pin 0** mesh (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: mesh
- **plugin**: core
- **scripting name**: mesh_provider
- **full name**: mesh.mesh_provider
- **internal name**: mesh_provider
- **license**: None