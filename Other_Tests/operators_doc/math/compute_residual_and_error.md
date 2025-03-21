---
category: math
plugin: core
license: None
---

# math:compute residual and error

## Description

Computes the Lp-norm of a field or a field container.
													When a second entry is provided, the residual (the difference between the first and second entry) is calculated along with the error as the Lp-norm of the difference. 
													When a second input is not provided, the calculation is only completed for the first entry.
													The type of calculation performed is based on the specifications provided for pin 1, pin 2 defines the type of error norm (L1 vs L2), and
													pin 3 which entity to use as a reference

## Inputs


- **Pin 0** field_or_fields_container1 (type: ['field', 'fields_container']) (optional: False): field or fields container - compulsory

- **Pin 1** normalization_type (type: ['int32']) (optional: True): type of normalization applied to the residuals and norm  calculation (optional, defaut: absolute): 
														0 for absolute, 
														1 for relative to the first entry at a given time step, 
														2 for normalized by the max at a given time step of the first entry or residuals depending on the reference field option, 
														3 for normalized by the max over all time steps of the first entry or residuals depending on the reference field option

- **Pin 2** norm_calculation_type (type: ['int32']) (optional: True): type for norm calculation (optional, default: L2) - It is normalized depending on Pin2 selection
														1 for L1, ie sum(abs(xi)), 
														2 for L2, ie sqrt(sum((xi^2))

- **Pin 3** field_reference (type: ['int32']) (optional: True): Field reference for the normalization step, default: 0 for entry 1, 1 for residuals - optional

- **Pin 4** field_or_fields_container2 (type: ['field', 'fields_container']) (optional: True): field or fields container of same dimensionality as entry 1 - optional


## Outputs


- **Pin 0** residuals (type: ['field', 'fields_container']): 0: normalized residuals (aka field 1 - field 2) as a field or field container, normalized depending on the normalization type

- **Pin 1** error (type: ['field', 'fields_container']): 1: error as a field or a field container depending on the entry's type.

- **Pin 2** residuals_normalization_factor (type: ['field', 'fields_container']): 2: factor used for residual normalization

- **Pin 3** error_normalization_factor (type: ['field', 'fields_container']): 3: factor used for error norm normalization


## Configurations


- **mutex** (type: ['bool']) (default: false): If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.

- **permissive** (type: ['bool']) (default: true): If this option is set to true, warning checks (like unit or data sizes) won't be done.


## Scripting

- **category**: math
- **plugin**: core
- **scripting name**: compute_residual_and_error
- **full name**: math.compute_residual_and_error
- **internal name**: error_norm_calc
- **license**: None