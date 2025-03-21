# logic:ascending sort

## Description

Sort a field (in 0) in ascending order with an optional component priority table, or a boolean, to enable sort by scoping (in 1). This operator does not support multiple elementary data per entity.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** component_priority_table (type: ['vector<int32>']) (optional: True): component priority table (vector of int)

- **Pin 2** sort_by_scoping (type: ['bool']) (optional: True): if true, uses scoping to sort the field (default is false)


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: ascending_sort
- **full name**: logic.ascending_sort
- **internal name**: ascending_sort
- **license**: any_dpf_supported_increments