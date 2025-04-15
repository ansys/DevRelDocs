# math:time freq interpolation

## Description

Interpolates between all the matching fields of a fields container at given times or frequencies, using ramped: fieldOut = field1*(1.-fact)+field2*(fact), or stepped: fieldOut=field2. If the time freq is higher than the max available, the field at the max time freq is taken. Computes the output time freq support to support the fields container

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | time_freq_values |[`double`](../../getting-started/using-data-containers.md#double), [`vector<double>`](../../getting-started/using-data-containers.md#vector<double>), [`field`](../../getting-started/using-data-containers.md#field) | Yes | list of frequencies or times needed. To specify load steps, put a Field (and not a list) in input with a scoping located on "TimeFreq_steps". |
| **Pin 2** | step |[`int32`](../../getting-started/using-data-containers.md#int32) | No | if a Field is set as input, the step ids should be its scoping. |
| **Pin 3** | interpolation_type |[`int32`](../../getting-started/using-data-containers.md#int32) | No | 1 is ramped, 2 is stepped, default is 1. |
| **Pin 4** | force_new_time_freq_support |[`bool`](../../getting-started/using-data-containers.md#bool) | No | If set to true, the output fields container will always have a new time freq support rescoped to the output time_freq_values (default is false). If set to false, the time freq support is only recreated when time or frequency values are between existing ones. |
| **Pin 8** | time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | No |  |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **Pin permissive** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, warning checks (like unit or data sizes) won't be done. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **math** | core | None | None | time_freq_interpolation | None |
