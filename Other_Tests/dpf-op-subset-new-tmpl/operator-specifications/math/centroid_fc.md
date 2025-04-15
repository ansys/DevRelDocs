# math:centroid (fields container)

## Description

Computes the centroid of all the matching fields of a fields container at a given time or frequency, using fieldOut = field1*(1.-fact)+field2*(fact).

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | time_freq |[`double`](../../getting-started/using-data-containers.md#double) | Yes |  |
| **Pin 2** | step |[`int32`](../../getting-started/using-data-containers.md#int32) | No |  |
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
| **math** | core | None | None | centroid_fc | None |
