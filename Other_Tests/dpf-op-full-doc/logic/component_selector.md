# logic:component selector (field)

## Description

Creates a scalar/vector field based on the selected component.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): 

- **Pin 1** component_number (type: ['int32', 'vector<int32>']) (optional: False): One or several component index that will be extracted from the initial field.

- **Pin 2** default_value (type: ['double']) (optional: True): Set a default value for components that do not exist.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: component_selector
- **full name**: logic.component_selector
- **internal name**: component_selector
- **license**: None