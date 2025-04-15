# metadata:time freq support get attribute

## Description

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Yes |  |
| **Pin 1** | property_name |[`string`](../../getting-started/using-data-containers.md#string) | Yes | Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs". |
| **Pin 2** | property_identifier |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping. |
| **Pin 3** | property_identifier_2 |[`int32`](../../getting-started/using-data-containers.md#int32) | No | Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered). |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | property |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Yes | Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", and a Field otherwise. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **metadata** | core | time_freq_support_get_attribute | metadata.time_freq_support_get_attribute | timefreqsupport::get_attribute | None |
