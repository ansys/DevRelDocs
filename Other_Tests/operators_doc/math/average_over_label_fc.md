# math:average over label

## Description

Compute the component-wise average over all the fields that have the same ID as the label set as input in the fields container. This computation can be incremental. If the input fields container is connected and the operator is run multiple times, the output field will be on all the connected inputs.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** label (type: ['string']) (optional: True): Label of the fields container where it should operate.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **incremental** (type: ['bool']) (default: true): This operator can be run several times with different inputs so that the output will take all the inputs of the different runs into account. It can be used to save memory. For example, a large time scoping can be split in smaller ranges of time to compute the result range by range.

- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: average_over_label_fc
- **license**: None