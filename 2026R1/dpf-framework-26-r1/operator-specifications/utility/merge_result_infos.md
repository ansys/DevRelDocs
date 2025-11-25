---
category: utility
plugin: core
license: None
---

# utility:merge result infos

**Version: 0.0.0**

## Description

Assembles a set of result information into a unique one.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  result_infos |`vector<shared_ptr<result_info>>`, [`result_info`](../../core-concepts/dpf-types.md#result-info) | A vector of result info containers to merge or result infos from pin 0 to ... |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| merged_result_infos |[`result_info`](../../core-concepts/dpf-types.md#result-info) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |
| **read_inputs_in_parallel** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the operator's inputs will be evaluated in parallel. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: merge_result_infos

 **Full name**: utility.merge_result_infos

 **Internal name**: merge::result_info

 **License**: None


## Changelog

- Version 0.0.0: Initial release.