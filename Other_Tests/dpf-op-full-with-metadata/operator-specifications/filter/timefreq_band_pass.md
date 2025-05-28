---
category: filter
plugin: core
license: any_dpf_supported_increments
---

# filter:band pass (timefreq)

## Description

The band pass filter returns all the values above (but not equal to) the minimum threshold value and below (but not equal to) the maximum threshold value in input.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  min_threshold |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field) | A minimum threshold scalar or a field containing one value is expected. |
| <strong>Pin 2</strong>|  max_threshold |[`double`](../../getting-started/using-data-containers.md#double), [`field`](../../getting-started/using-data-containers.md#field) | A maximum threshold scalar or a field containing one value is expected. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) |  |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: filter
- Plugin: core
- Scripting name: timefreq_band_pass
- Full name: filter.timefreq_band_pass
- Internal name: core::timefreq::band_pass
- License: any_dpf_supported_increments
  