---
category: utility
plugin: core
license: None
---

# utility:producer consumer for each

## Description

Allows to write a loop over operators by connecting data to iterate and by requesting the incrementally output merged.The chain of Operators are split into a first part: the producers and a second part: the consumers. These 2 parts will run asynchronously on 2 threads.

## Inputs


- **Pin 0** producer_consumer_iterableq (type: []) (optional: False): The result of the make_producer_consumer_for_each_iterator operator.

- **Pin 3** forward (type: []) (optional: False): output of the last operators of the workflow


## Outputs


- **Pin 0** empty (type: []): 

- **Pin 3** output (type: []): 


## Configurations


- **evaluate_inputs_before_run** (type: ['bool']) (default: false): If this option is set to true, all input pins of the operator will be evaluated before entering the run method to maintain a correct Operator status.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: producer_consumer_for_each
- **full name**: utility.producer_consumer_for_each
- **internal name**: producer_consumer_for_each
- **license**: None