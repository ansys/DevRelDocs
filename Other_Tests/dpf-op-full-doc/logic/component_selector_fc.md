# logic:component selector (fields container)

## Description

Creates a scalar fields container based on the selected component for each field.

## Inputs


- **Pin 0** fields_container (type: ['fields_container', 'field']) (optional: False): 

- **Pin 1** component_number (type: ['int32', 'vector<int32>']) (optional: False): one or several component index that will be extracted from the initial field.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: component_selector_fc
- **full name**: logic.component_selector_fc
- **internal name**: component_selector_fc
- **license**: None