# result:cyclic expansion

## Description

Expand cyclic results from a fieldsContainer for given sets, sectors and scoping (optionals).

## Inputs


- **Pin 0** time_scoping (type: ['scoping', 'vector<int32>']) (optional: True): 

- **Pin 1** mesh_scoping (type: ['scopings_container', 'scoping', 'vector<int32>']) (optional: True): 

- **Pin 2** fields_container (type: ['fields_container']) (optional: False): field container with the base and duplicate sectors

- **Pin 3** harmonic_index (type: ['int32']) (optional: True): 

- **Pin 5** bool_rotate_to_global (type: ['bool']) (optional: True): default is true

- **Pin 6** map_size_scoping_out (type: ['umap<int32,int32>']) (optional: True): map provider by scoping adapter

- **Pin 7** normalization_factor (type: ['double']) (optional: True): 

- **Pin 14** merge_stages (type: ['bool']) (optional: True): 

- **Pin 16** cyclic_support (type: ['cyclic_support']) (optional: False): 

- **Pin 18** sectors_to_expand (type: ['vector<int32>', 'scoping', 'scopings_container']) (optional: True): sectors to expand (start at 0), for multistage: use scopings container with 'stage' label.

- **Pin 19** phi (type: ['double']) (optional: True): angle phi in degrees (default value 0.0)


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): FieldsContainer filled in


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.

- **use_cache** (type: ['bool']) (default: true): Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: cyclic_expansion
- **full name**: result.cyclic_expansion
- **internal name**: cyclic_expansion
- **license**: None