---
category: filter
plugin: core
license: None
---

# filter:filtering max over time workflow

## Description

Creates a filtering workflow that will filter results based on a threshold of a selected invariant.

## Inputs


- **Pin 0** invariant_fc_operator (type: ['string']) (optional: False): Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc).

- **Pin 1** output_pin (type: ['int32']) (optional: True): Output pin of the invariant operator. Default = 0.

- **Pin 2** list_of_results (type: ['vector<string>', 'string']) (optional: True): If no result is given, filter will be applied on Stresses and Strains

- **Pin 3** threshold (type: ['double']) (optional: True): Threshold from which the operator will filter.


## Outputs


- **Pin 0** workflow (type: ['workflow']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: filter
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: filtering_max_over_time
- **license**: None