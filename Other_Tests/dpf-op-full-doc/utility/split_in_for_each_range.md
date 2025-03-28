# utility:split in for each range

## Description

Split a scoping into several pieces so you can iterate it with a for_each loop.

## Inputs


- **Pin 0** iterable (type: []) (optional: True): Iterable that can be combined with the one currently generated.

- **Pin 1** operator_to_iterate (type: ['operator']) (optional: False): Operator that must be reconnected with the range values.

- **Pin 2** pin_index (type: ['int32']) (optional: False): 

- **Pin 3** scoping (type: ['scoping']) (optional: False): 

- **Pin 4** chunk_size (type: ['int32']) (optional: False): 


## Outputs


- **Pin 0** output (type: []): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: split_in_for_each_range
- **full name**: utility.split_in_for_each_range
- **internal name**: chunk_in_for_each_range
- **license**: None