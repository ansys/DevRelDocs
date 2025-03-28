# utility:merge meshes

## Description

Take a set of mesh and assemble them in a unique one

## Inputs


- **Pin -200** should_merge_named_selections (type: ['bool']) (optional: True): For certain types of files (such as RST), scoping from names selection does not need to be merged.If this pin is true, the merge occurs. If this pin is false, the merge does not occur. Default is true.

- **Pin 0** meshes (type: ['vector<shared_ptr<abstract_meshed_region>>', 'abstract_meshed_region']) (optional: False): A vector of meshed region to merge or meshed region from pin 0 to ...

- **Pin 101** merge_method (type: ['int32']) (optional: True): 0: merge by distance, 1: merge by node id (default)

- **Pin 102** box_size (type: ['double']) (optional: True): Box size used when merging by distance. Default value is 1e-10.

- **Pin 103** remove_duplicate_elements (type: ['int32']) (optional: True): 0: keep duplicate elements (default), 1: remove duplicate elements


## Outputs


- **Pin 0** merges_mesh (type: ['abstract_meshed_region']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_meshes
- **full name**: utility.merge_meshes
- **internal name**: merge::mesh
- **license**: None