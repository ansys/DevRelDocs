---
category: filter
plugin: core
license: any_dpf_supported_increments
Version: 0.0.0
---

# filter:signed high pass (timefreq)

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

The high pass filter returns all the values above, or equal, in absolute value to the threshold value in input.


## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](./../../getting-started/using-data-containers.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  threshold |[`double`](./../../getting-started/using-data-containers.md#double), [`field`](./../../getting-started/using-data-containers.md#field) | A threshold scalar or a field containing one value is expected. |
| <strong>Pin 2</strong>|  both |[`bool`](./../../getting-started/using-data-containers.md#bool) | The default is false. If set to true, the complement of the filtered fields container is returned on output pin 1. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| time_freq_support |[`time_freq_support`](./../../getting-started/using-data-containers.md#time-freq-support) |  |
|  **Pin 1**| scoping |[`scoping`](./../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](./../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: timefreq_signed_high_pass

 **Full name**: filter.timefreq_signed_high_pass

 **Internal name**: core::timefreq::signed_high_pass

 **License**: any_dpf_supported_increments
 
