# filter:abc weightings

## Description

Computes ABC-weightings for the amplitude spectrum in dB units.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | data to be weighted in dB units. |
| **Pin 1** | weighting_type |[`int32`](../../getting-started/using-data-containers.md#int32) | Yes | if this pin is set to 0, the A-weighting is computed, 1 the B-weigting is computed and 2 the C-weightings is computed. |
| **Pin 2** | shape_by_tf_scoping |[`bool`](../../getting-started/using-data-containers.md#bool) | Yes | if this pin is set to true, each field of the input fields container is defined by time freq scoping and not by ids. Default is false |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | weightings |[`fields_container`](../../getting-started/using-data-containers.md#fields-container) | Yes | weighted data in dB units. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin inplace** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | The output is written over the input to save memory if this config is set to true. |
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **filter** | core | abc_weightings | filter.abc_weightings | abc_weightings | any_dpf_supported_increments |
