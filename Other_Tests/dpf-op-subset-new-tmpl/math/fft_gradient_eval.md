# math:fft gradient evaluation

## Description

Evaluate min max based on the fast fourier transform at a given field, using gradient method for adaptative time step.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | time_scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | No | if specified only the results at these set ids are used |
| **Pin 2** | fs_ratio |[`int32`](../getting-started/using-data-containers.md#int32) | No | default value = 20 |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | coefficients |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | fft_gradient_eval | math.fft_gradient_eval | fft_eval_gr | any_dpf_supported_increments |
