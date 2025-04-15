# min_max:max over phase

## Description

Returns, for each entity, the maximum value of (real value * cos(theta) - imaginary value * sin(theta)) for theta in [0, 360]degrees with the increment in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | real_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | imaginary_field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | abs_value |[`bool`](../getting-started/using-data-containers.md#bool) | No | Should use absolute value. |
| **Pin 3** | phase_increment |[`double`](../getting-started/using-data-containers.md#double) | No | Phase increment (default is 10.0 degrees). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **min_max** | core | None | None | max_over_phase | any_dpf_supported_increments |
