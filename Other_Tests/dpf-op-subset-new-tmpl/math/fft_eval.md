# math:fft evaluation

## Description

Evaluate the fast fourier transforms at a given set of fields.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field_t |[`field`](../getting-started/using-data-containers.md#field) | Yes | field of values to evaluate |
| **Pin 1** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | if specified only the results at these set ids are used |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | offset |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | fft_eval | math.fft_eval | fft_eval | any_dpf_supported_increments |
