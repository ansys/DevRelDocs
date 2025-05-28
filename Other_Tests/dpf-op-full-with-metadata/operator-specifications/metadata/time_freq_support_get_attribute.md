---
category: metadata
plugin: core
license: None
---

# metadata:time freq support get attribute

## Description

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../getting-started/using-data-containers.md#string) | Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs". |
| <strong>Pin 2</strong>|  property_identifier |[`int32`](../../getting-started/using-data-containers.md#int32) | Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping. |
| <strong>Pin 3</strong>|  property_identifier_2 |[`int32`](../../getting-started/using-data-containers.md#int32) | Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered). |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | property |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field), [`scoping`](../../getting-started/using-data-containers.md#scoping) | Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", and a Field otherwise. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: metadata
- Plugin: core
- Scripting name: time_freq_support_get_attribute
- Full name: metadata.time_freq_support_get_attribute
- Internal name: timefreqsupport::get_attribute
- License: None
  