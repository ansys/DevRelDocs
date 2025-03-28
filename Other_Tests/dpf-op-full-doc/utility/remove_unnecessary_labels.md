# utility:remove unnecessary labels

## Description

Removes the selected label from a fields container.

## Inputs


- **Pin -1** permissive (type: ['bool']) (optional: True): If true, the operator does not throw an error if the label to be removed has more than one entry.

- **Pin 0** fields_container (type: ['fields_container']) (optional: False): Fields Container with the label to be removed.

- **Pin 1** label_to_remove (type: ['string']) (optional: False): Label to be removed from the fields container.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **read_inputs_in_parallel** (type: ['bool']) (default: false): If this option is set to true, the operator's inputs will be evaluated in parallel.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: remove_unnecessary_labels
- **full name**: utility.remove_unnecessary_labels
- **internal name**: remove_unnecessary_label
- **license**: None