---
category: mapping
plugin: core
license: None
---

# mapping:prepare mapping workflow

## Description

Generates a workflow that can map results from a support to another one.

## Inputs


- **Pin 0** input_support (type: ['field', 'abstract_meshed_region']) (optional: False): 

- **Pin 1** output_support (type: ['field', 'abstract_meshed_region']) (optional: False): 

- **Pin 2** filter_radius (type: ['double']) (optional: False): Radius size for the RBF filter

- **Pin 3** influence_box (type: ['double']) (optional: True): 


## Outputs


- **Pin 0** mapping_workflow (type: ['workflow']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: mapping
- **plugin**: core
- **scripting name**: prepare_mapping_workflow
- **full name**: mapping.prepare_mapping_workflow
- **internal name**: prepare_mapping_workflow
- **license**: None