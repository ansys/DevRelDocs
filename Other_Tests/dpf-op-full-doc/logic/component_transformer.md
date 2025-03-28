# logic:component transformer (field)

## Description

Takes the input field and creates a field with overriden value on given components.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): 

- **Pin 1** component_number (type: ['int32', 'vector<int32>']) (optional: False): One or several component index that will be modified from the initial field.

- **Pin 2** default_value (type: ['double']) (optional: True): Set a default value for components selected.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: component_transformer
- **full name**: logic.component_transformer
- **internal name**: component_transformer
- **license**: None