# min_max:phase of max

## Description

Evaluates phase of maximum.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | real_field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 1** | imaginary_field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |
| **Pin 2** | abs_value |[`bool`](../../getting-started/using-data-containers.md#bool) | No | Should use absolute value. |
| **Pin 3** | phase_increment |[`double`](../../getting-started/using-data-containers.md#double) | Yes | Phase increment. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../../getting-started/using-data-containers.md#field) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **min_max** | core | None | None | phase_of_max | any_dpf_supported_increments |
