# math:compute residual and error

## Description

Computes the Lp-norm of a field or a field container.
													When a second entry is provided, the residual (the difference between the first and second entry) is calculated along with the error as the Lp-norm of the difference. 
													When a second input is not provided, the calculation is only completed for the first entry.
													The type of calculation performed is based on the specifications provided for pin 1, pin 2 defines the type of error norm (L1 vs L2), and
													pin 3 which entity to use as a reference

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_or_fields_container1 |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container - compulsory |
| **Pin 1** | normalization_type |[`int32`](../getting-started/using-data-containers.md#int32) | No | type of normalization applied to the residuals and norm  calculation (optional, defaut: absolute): 
														0 for absolute, 
														1 for relative to the first entry at a given time step, 
														2 for normalized by the max at a given time step of the first entry or residuals depending on the reference field option, 
														3 for normalized by the max over all time steps of the first entry or residuals depending on the reference field option |
| **Pin 2** | norm_calculation_type |[`int32`](../getting-started/using-data-containers.md#int32) | No | type for norm calculation (optional, default: L2) - It is normalized depending on Pin2 selection
														1 for L1, ie sum(abs(xi)), 
														2 for L2, ie sqrt(sum((xi^2)) |
| **Pin 3** | field_reference |[`int32`](../getting-started/using-data-containers.md#int32) | No | Field reference for the normalization step, default: 0 for entry 1, 1 for residuals - optional |
| **Pin 4** | field_or_fields_container2 |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | No | field or fields container of same dimensionality as entry 1 - optional |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | residuals |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | 0: normalized residuals (aka field 1 - field 2) as a field or field container, normalized depending on the normalization type |
| **Pin 1** | error |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | 1: error as a field or a field container depending on the entry's type. |
| **Pin 2** | residuals_normalization_factor |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | 2: factor used for residual normalization |
| **Pin 3** | error_normalization_factor |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | 3: factor used for error norm normalization |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../getting-started/using-data-containers.md#bool) | true | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | compute_residual_and_error | math.compute_residual_and_error | error_norm_calc | None |
