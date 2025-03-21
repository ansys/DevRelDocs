---
category: logic
plugin: core
license: None
---

# logic:elementary data selector (field)

## Description

Creates a scalar/vector field based on the selected elementary data.

## Inputs


- **Pin 0** field (type: ['field', 'fields_container']) (optional: False): 

- **Pin 1** elementary_data_index (type: ['int32', 'vector<int32>']) (optional: False): One or several elementary data index that will be extracted from the initial field. For field with nature matrix, this is the line indices to extract.

- **Pin 2** default_value (type: ['double']) (optional: True): Set a default value for elementary data that do not exist.

- **Pin 3** elementary_data_index_2 (type: ['int32', 'vector<int32>']) (optional: True): For field with nature matrix, this is the column indices to extract.


## Outputs


- **Pin 0** field (type: ['field']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: elementary_data_selector
- **full name**: logic.elementary_data_selector
- **internal name**: elementary_data_selector
- **license**: None