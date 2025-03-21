# utility:extract sub fields container

## Description

Creates a new fields container with all the fields corresponding to the label space in input 1. If pin 1 is not defined, pin 0 input will be copied to the output.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): fields_container

- **Pin 1** label_space (type: ['label_space', 'scoping']) (optional: True): Label space, or scoping defining the label space (scoping location), values to keep (scoping IDs)

- **Pin 2** collapse_labels (type: ['bool']) (optional: True): If set to true (default) the input label space (scoping location) is suppressed from the output fields container, otherwise, label space is kept.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): fields_container


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: extract_sub_fc
- **full name**: utility.extract_sub_fc
- **internal name**: extract_sub_fc
- **license**: None