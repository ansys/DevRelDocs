---
category: filter
plugin: core
license: None
---

# filter:filtering max over time workflow

**Version: 0.0.0**

## Description

Creates a filtering workflow that will filter results based on a threshold of a selected invariant.

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  invariant_fc_operator |[`string`](../../core-concepts/dpf-types.md#standard-types) | Name of the invariant operator to be used to calculate filter (available: eqv_fc, invariants_deriv_fc, invariants_fc). |
| <strong>Pin 1</strong>|  output_pin |[`int32`](../../core-concepts/dpf-types.md#standard-types) | Output pin of the invariant operator. Default = 0. |
| <strong>Pin 2</strong>|  list_of_results |[`vector<string>`](../../core-concepts/dpf-types.md#standard-types), [`string`](../../core-concepts/dpf-types.md#standard-types) | If no result is given, filter will be applied on Stresses and Strains |
| <strong>Pin 3</strong>|  threshold |[`double`](../../core-concepts/dpf-types.md#standard-types) | Threshold from which the operator will filter. |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| workflow |[`workflow`](../../core-concepts/dpf-types.md#workflow) |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: filter

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: filtering_max_over_time

 **License**: None


## Changelog

- Version 0.0.0: Initial release.