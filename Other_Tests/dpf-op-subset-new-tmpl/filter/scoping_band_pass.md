# filter:band pass (scoping)

## Description

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | field |[`field`](../getting-started/using-data-containers.md#field), [`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | field or fields container with only one field is expected |
| **Pin 1** | min_threshold |[`double`](../getting-started/using-data-containers.md#double), [`field`](../getting-started/using-data-containers.md#field) | Yes | A minimum threshold scalar or a field containing one value is expected. |
| **Pin 2** | max_threshold |[`double`](../getting-started/using-data-containers.md#double), [`field`](../getting-started/using-data-containers.md#field) | No | A maximum threshold scalar or a field containing one value is expected. |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scoping |[`scoping`](../getting-started/using-data-containers.md#scoping) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **filter** | core | scoping_band_pass | filter.scoping_band_pass | core::scoping::band_pass | any_dpf_supported_increments |
