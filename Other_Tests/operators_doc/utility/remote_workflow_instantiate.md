---
category: utility
plugin: core
license: None
---

# utility:remote workflow instantiate

## Description

Sends a local workflow to a remote process (and keep a local image of it) or create a local image of an existing remote workflow (identified by an id and an address) for a given protocol registered in the streams.

## Inputs


- **Pin 0** workflow_to_send (type: ['workflow', 'int32']) (optional: False): local workflow to push to a remote or id of a remote workflow

- **Pin 3** streams_to_remote (type: ['streams_container']) (optional: False): 

- **Pin 4** data_sources_to_remote (type: ['data_sources']) (optional: True): 


## Outputs


- **Pin 0** remote_workflow (type: ['workflow']): remote workflow containing an image of the remote workflow and the protocols streams


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **num_threads** (type: ['int32']) (default: 0): Number of threads to use to run in parallel

- **run_in_parallel** (type: ['bool']) (default: true): Loops are allowed to run in parallel if the value of this config is set to true.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: remote_workflow_instantiate
- **full name**: utility.remote_workflow_instantiate
- **internal name**: remote_workflow_instantiate
- **license**: None