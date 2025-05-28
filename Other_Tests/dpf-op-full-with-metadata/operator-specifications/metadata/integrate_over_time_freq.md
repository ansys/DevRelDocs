---
category: metadata
plugin: core
license: any_dpf_supported_increments
---

# metadata:integrate over time freq

## Description

Integration of an input field over timefreq.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  field |[`field`](../../getting-started/using-data-containers.md#field) |  |
| <strong>Pin 1</strong>|  scoping |[`scoping`](../../getting-started/using-data-containers.md#scoping) | Integrate the input field over a specific scoping. |
| <strong>Pin 2</strong>|  time_freq_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | Time Freq to integrate on, otherwise time freq support from the input field is taken. |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | field |[`field`](../../getting-started/using-data-containers.md#field) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: metadata
- Plugin: core
- Scripting name: integrate_over_time_freq
- Full name: metadata.integrate_over_time_freq
- Internal name: timefreq::integrate
- License: any_dpf_supported_increments
  