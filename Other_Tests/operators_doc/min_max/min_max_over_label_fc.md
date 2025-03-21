# min_max:over label

## Description

Create two fields (0 min 1 max) by looping over the fields container in input and taking the min/max value by component through all the fields having the same id for the label set in input (in pin 1). If no label is specified or if the specified label doesn't exist, the operation is done over all the fields. The fields out are located on the label set in input, so their scoping are the labels ids.For each min max value, the label id for one other fields container labels is kept and returned in a scoping in pin 2 (min) and 3 (max).The field's scoping ids of the value kept in min max are also returned in the scopings in pin 4 (min) and 5 (max).

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): 

- **Pin 1** label (type: ['string']) (optional: False): label name from the fields container


## Outputs


- **Pin 0** field_min (type: ['field']): 

- **Pin 1** field_max (type: ['field']): 

- **Pin 2** domain_ids_min (type: ['scoping']): 

- **Pin 3** domain_ids_max (type: ['scoping']): 

- **Pin 4** scoping_ids_min (type: ['scoping']): 

- **Pin 5** scoping_ids_max (type: ['scoping']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: min_max
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: min_max_over_label_fc
- **license**: None