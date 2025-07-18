---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:signed high pass (timescoping)

**Version: 0.0.0**

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types), [`field`](../../core-concepts/dpf-types.md#field) | A threshold scalar or a field containing one value is expected. |
| <strong>Pin 2</strong>|  both |[`bool`](../../core-concepts/dpf-types.md#standard-types) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| scoping |[`scoping`](../../core-concepts/dpf-types.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: timescoping_signed_high_pass

 **Full name**: filter.timescoping_signed_high_pass

 **Internal name**: core::timescoping::signed_high_pass

 **License**: any_dpf_supported_increments


## Changelog

- Version 0.0.0: Initial release.