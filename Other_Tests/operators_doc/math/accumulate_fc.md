# math:total sum (fields container)

## Description

Sums all the elementary data of a field to produce one elementary data point.

## Inputs


- **Pin 0** fields_container (type: ['fields_container']) (optional: False): field or fields container with only one field is expected

- **Pin 1** ponderation (type: ['field']) (optional: True): Field containing weights, one weight per entity

- **Pin 2** time_scoping (type: ['scoping']) (optional: True): time_scoping


## Outputs


- **Pin 0** fields_container (type: ['fields_container']): Field containing the (weighted) sum for each component in an elementary data


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: None
- **full name**: None
- **internal name**: accumulate_fc
- **license**: None