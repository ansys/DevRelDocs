# math:sweeping phase (fields container)

## Description

Shifts the phase of all the corresponding real and imaginary fields of a fields container for a given angle (in 2) of a unit (in 4).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 2** | angle |[`double`](../../getting-started/using-data-containers.md#double) | Yes |  |
| **Pin 3** | unit_name |[`string`](../../getting-started/using-data-containers.md#string) | No | String Unit. Supported values: "deg" or "rad". Default: "rad". |
| **Pin 4** | abs_value |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | None | None | sweeping_phase_fc | None |
