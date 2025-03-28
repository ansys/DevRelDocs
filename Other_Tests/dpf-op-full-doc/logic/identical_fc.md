# logic:same fields container?

## Description

Checks if two fields containers are identical.

## Inputs


- **Pin 0** fields_containerA (type: ['fields_container']) (optional: False): 

- **Pin 1** fields_containerB (type: ['fields_container']) (optional: False): 

- **Pin 2** small_value (type: ['double']) (optional: True): Double positive small value. Smallest value which will be considered during the comparison step. All the abs(values) in the field less than this value are considered as null, (default value:1.0e-14).

- **Pin 3** tolerance (type: ['double']) (optional: True): Double relative tolerance. Maximum tolerance gap between two compared values. Values within relative tolerance are considered identical (v1-v2)/v2 < relativeTol (default is 0.001).


## Outputs


- **Pin 0** boolean (type: ['bool']): bool (true if identical...)

- **Pin 1** message (type: ['string']): 


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: logic
- **plugin**: core
- **scripting name**: identical_fc
- **full name**: logic.identical_fc
- **internal name**: AreFieldsIdentical_fc
- **license**: None