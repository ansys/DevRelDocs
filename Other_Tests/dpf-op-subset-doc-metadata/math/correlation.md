---
category: math
plugin: core
license: any_dpf_supported_increments
---

# math:correlation

## Description

Takes two fields $a$ and $b$ and a weighting matrix $M$ and computes their correlation as $\frac{aMb}{||aMa||.||bMb||}$. If several $b$ fields are provided (via a fields container), correlation is computed for each of them.

## Inputs


- **Pin 0** fieldA (type: ['field', 'double', 'vector<double>']) (optional: False): Field $a$. The reference field.

- **Pin 1** fieldB (type: ['field', 'fields_container']) (optional: False): Field $b$. If a fields container is provided, correlation is computed for each field.

- **Pin 2** weights (type: ['field', 'fields_container']) (optional: False): Field $M$, optional weighting for correlation computation.

- **Pin 3** absoluteValue (type: ['bool']) (optional: False): If true, correlation factor is $\frac{||aMb||}{||aMa||.||bMb||}$


## Outputs


- **Pin 0** field (type: ['field']): Correlation factor for each input field $b$.

- **Pin 1** index (type: ['int32']): If several $b$ are provided, this output contains the index of the highest correlation factor.


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: correlation
- **full name**: math.correlation
- **internal name**: correlation
- **license**: any_dpf_supported_increments