# utility:merge result infos

## Description

Assembles a set of result information into a unique one.

## Inputs


- **Pin 0** result_infos (type: ['vector<shared_ptr<result_info>>', 'result_info']) (optional: False): A vector of result info containers to merge or result infos from pin 0 to ...


## Outputs


- **Pin 0** merged_result_infos (type: ['result_info']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: merge_result_infos
- **full name**: utility.merge_result_infos
- **internal name**: merge::result_info
- **license**: None