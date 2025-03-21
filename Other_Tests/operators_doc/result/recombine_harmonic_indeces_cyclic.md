---
category: result
plugin: core
license: None
---

# result:recombine cyclic harmonic indices

## Description

Add the fields corresponding to different load steps with the same frequencies to compute the response.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.

- **use_cache** (type: ['bool']) (default: true): Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.

- **work_by_index** (type: ['bool']) (default: false): If this option is set to true, loops and comparisons by entity will be done by index instead of ids.


## Scripting

- **category**: result
- **plugin**: core
- **scripting name**: recombine_harmonic_indeces_cyclic
- **full name**: result.recombine_harmonic_indeces_cyclic
- **internal name**: recombine_harmonic_indeces_cyclic
- **license**: None