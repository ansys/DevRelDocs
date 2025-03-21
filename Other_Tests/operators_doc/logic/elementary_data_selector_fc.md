# logic:elementary data selector (fields container)

## Description

Creates a scalar fields container based on the selected elementary data for each field.

## Inputs


- **Pin 0** fields_container (type: ['fields_container', 'field']) (optional: False): 

- **Pin 1** elementary_data_index (type: ['int32', 'vector<int32>']) (optional: False): one or several elementary data indices that will be extracted from the initial field. For a field with a nature matrix, this extracts the line indices.

- **Pin 3** elementary_data_index_2 (type: ['int32', 'vector<int32>']) (optional: True): For a field with nature matrix, this extracts the column indices.


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: elementary_data_selector_fc
- **full name**: logic.elementary_data_selector_fc
- **internal name**: elementary_data_selector_fc
- **license**: None