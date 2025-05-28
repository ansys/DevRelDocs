---
category: utility
plugin: core
license: None
---

# utility:merge time freq supports

## Description

Assembles a set of time/frequency supports into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  time_freq_supports |[`vector<shared_ptr<time_freq_support>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<time-freq-support>>), [`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) | A vector of time/frequency supports to merge or time/frequency supports from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_support |[`time_freq_support`](../../getting-started/using-data-containers.md#time-freq-support) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_time_freq_supports
- Full name: utility.merge_time_freq_supports
- Internal name: merge::time_freq_support
- License: None
  