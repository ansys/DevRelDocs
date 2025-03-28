---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:mac

## Description

Computes MAC Matrix between two fields container, both for real and complex cases. For mixed cases (real-complex and complex) only the real part is considered. Providing inputs with the same component scoping is an user responsability.

## Inputs


- **Pin 0** fields_containerA (type: ['fields_container']) (optional: False): Fields Container A.

- **Pin 1** fields_containerB (type: ['fields_container']) (optional: False): Fields Container B.

- **Pin 2** weights (type: ['field']) (optional: False): Field M, optional weighting for MAC Matrix computation.


## Outputs


- **Pin 0** field (type: ['field']): MAC Matrix for all the combinations between mode fields of Field Container A and Field Container B. Results listed row by row.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: mac
- **full name**: math.mac
- **internal name**: mac
- **license**: any_dpf_supported_increments