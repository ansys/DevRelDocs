---
category: utility
plugin: core
license: None
---

# utility:remote operator instantiate

## Description

Create a local image of an existing remote operator (identified by an id and an address) for a given protocol registered in the streams. A workflow is created with this operator and returned in output

## Inputs


- **Pin 0** operator_to_send (type: ['int32']) (optional: False): local workflow to push to a remote or id of a remote workflow

- **Pin 1** output_pin (type: ['int32']) (optional: False): pin number of the output to name

- **Pin 3** streams_to_remote (type: ['streams_container']) (optional: False): 

- **Pin 4** data_sources_to_remote (type: ['data_sources']) (optional: True): 

- **Pin 5** output_name (type: ['string']) (optional: False): output's name of the workflow to return


## Outputs


- **Pin 0** remote_workflow (type: ['workflow']): remote workflow containing an image of the remote workflow and the protocols streams


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: remote_operator_instantiate
- **full name**: utility.remote_operator_instantiate
- **internal name**: remote_operator_instantiate
- **license**: None