# averaging:extend to mid nodes (fields container)

## Description

Extends Elemental Nodal or Nodal fields defined on corner nodes to Elemental Nodal fields defined also on the mid nodes.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** mesh (type: ['abstract_meshed_region']) (optional: True): The mesh region in this pin is used to perform the averaging. It is used if there is no fields support.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **inplace** (type: ['bool']) (default: false): The output is written over the input to save memory if this configuration is set to true. Only supported for nodal fields in input.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: averaging
- **plugin**: core
- **scripting name**: extend_to_mid_nodes_fc
- **full name**: averaging.extend_to_mid_nodes_fc
- **internal name**: extend_to_mid_nodes_fc
- **license**: any_dpf_supported_increments