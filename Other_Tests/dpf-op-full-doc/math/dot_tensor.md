# math:dot (tensors)

## Description

Computes element-wise dot product between two tensor fields.

## Inputs


- **Pin 0** fieldA (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** fieldB (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **binary_operation** (type: ['binary_operation_enum', 'int32']) (default: 1): This option allows to choose how two inputs will be treated together. eOnlyIntersection (0) means that the output will only contain the entities shared by all the inputs. eUnion (1) means that the output will contain all the entities contained in at least one of the inputs.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **permissive** (type: ['bool']) (default: false): If this option is set to true, warning checks (like unit or data sizes) won't be done.

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.

- **use_cache** (type: ['bool']) (default: true): Some intermediate data is put in cache if this config is set to true. This option can reduce computation time after the first run.

- **work_by_index** (type: ['bool']) (default: false): If this option is set to true, loops and comparisons by entity will be done by index instead of ids.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: dot_tensor
- **license**: None