---
category: utility
plugin: core
license: None
---

# utility:fields container get attribute

## Description

Uses the FieldsContainer APIs to return a given attribute of the mesh in input.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** property_name (type: ['string']) (optional: False): Supported property names are: "label_scoping", "label_values", "time_freq_support", "labels", "field_scoping" .

- **Pin 2** property_identifier (type: ['string', 'int32']) (optional: True): Additional pin for some property : the label name for "label_scoping" or "label_values", the field index (default 0) for "field_scoping".


## Outputs


- **Pin 0** property (type: ['scoping', 'vector<int32>', 'time_freq_support', 'vector<string>', 'label_space']): Returns a Scoping for property: "label_scoping", a vector of int for "label_values", a time freq support for "time_freq_support", a vector of string for "labels", a LabelSpace for "field_scoping".


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: utility
- **plugin**: core
- **scripting name**: fc_get_attribute
- **full name**: utility.fc_get_attribute
- **internal name**: fieldscontainer::get_attribute
- **license**: None