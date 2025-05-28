---
category: utility
plugin: core
license: None
---

# utility:merge result infos

## Description

Assembles a set of result information into a unique one.

### Plugin

core

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_infos |[`vector<shared_ptr<result_info>>`](../../getting-started/using-data-containers.md#vector<shared-ptr<result-info>>), [`result_info`](../../getting-started/using-data-containers.md#result-info) | A vector of result info containers to merge or result infos from pin 0 to ... |


## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | merged_result_infos |[`result_info`](../../getting-started/using-data-containers.md#result-info) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

- Category: utility
- Plugin: core
- Scripting name: merge_result_infos
- Full name: utility.merge_result_infos
- Internal name: merge::result_info
- License: None
  