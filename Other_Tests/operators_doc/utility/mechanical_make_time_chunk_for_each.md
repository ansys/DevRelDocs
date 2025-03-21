---
category: utility
plugin: core
license: None
---

# utility:mechanical: make time chunk

## Description

Splits a list of time/freq values into chunks depending on evaluated result properties,mesh size and max number of bytes accepted and calls "make_for_each_range" to generate a range that can be consumed by the for_each operator

## Inputs


- **Pin 0** target_time_freq_values (type: ['vector<double>', 'double']) (optional: False): List of time/freq values to potentially split in chunks.

- **Pin 1** operator_to_iterate (type: ['operator']) (optional: False): Operator that must be reconnected with the range values.

- **Pin 2** pin_index (type: ['int32']) (optional: False): 

- **Pin 7** abstract_meshed_region (type: ['abstract_meshed_region']) (optional: False): The number of nodes (for "Nodal" results) or number of elements (for "Elemental" results) is used to compute the chunk.

- **Pin 200** chunk_config (type: ['abstract_data_tree']) (optional: False): a data tree with an int attribute "max_num_bytes", an int attribute "dimensionality" (average result size by entity), a string attribute "location" ("Nodal" or"Elemental") is expected.

- **Pin 1000** producer_op1 (type: ['operator']) (optional: False): 

- **Pin 1001** output_pin_of_producer_op1 (type: ['int32']) (optional: False): 

- **Pin 1002** input_pin_of_consumer_op1 (type: ['int32']) (optional: False): 

- **Pin 1003** consumer_op1 (type: ['operator']) (optional: False): 


## Outputs


- **Pin 0** chunks (type: []): To connect to "producer_consumer_for_each" Operator on pin 0


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: mechanical::make_time_chunk_for_each
- **license**: None