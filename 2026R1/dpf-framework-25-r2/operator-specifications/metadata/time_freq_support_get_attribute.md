---
category: metadata
plugin: core
license: None
---

# metadata:time freq support get attribute

**Version: 0.0.0**

## Description

Uses the TimeFreqSupport APIs to return a given attribute of the scoping in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  property_name |[`string`](../../core-concepts/dpf-types.md#standard-types) | Supported property names are: "time_freqs", "imaginary_freqs", "frequency_tolerance", "set_id", "cummulative_index", "sets_freqs". |
| <strong>Pin 2</strong>|  property_identifier |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Additional pin for properties "set_id" and "cummulative_index": the step id, for "sets_freqs": the sets scoping. |
| <strong>Pin 3</strong>|  property_identifier_2 |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Additional pin for properties "set_id" and "cummulative_index": the substep id (if none, last substep is considered). |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| property |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field), [`scoping`](../../core-concepts/dpf-types.md#scoping) | Returns a double for property: "frequency_tolerance", a single-value Scoping for properties for "set_id" and "cummulative_index", and a Field otherwise. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: metadata

 **Plugin**: core

 **Scripting name**: time_freq_support_get_attribute

 **Full name**: metadata.time_freq_support_get_attribute

 **Internal name**: timefreqsupport::get_attribute

 **License**: None


## Changelog

- Version 0.0.0: Initial release.