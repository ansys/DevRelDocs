---
category: utility
plugin: core
license: None
Version: 0.0.0
---

# utility:mechanical: make time chunk

## Version

0.0.0

## Changelog

- Version 0.0.0: Initial release.

## Description

Splits a list of time/freq values into chunks depending on evaluated result properties,mesh size and max number of bytes accepted and calls "make_for_each_range" to generate a range that can be consumed by the for_each operator


## Inputs


| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | target_time_freq_values |[`vector<double>`](../../core-concepts/dpf-types.md#standard-types), [`double`](../../core-concepts/dpf-types.md#double) | List of time/freq values to potentially split in chunks. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | operator_to_iterate |[`operator`](../../core-concepts/dpf-types.md#operator) | Operator that must be reconnected with the range values. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | pin_index |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region) | The number of nodes (for "Nodal" results) or number of elements (for "Elemental" results) is used to compute the chunk. |
| <strong>Pin 200</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | chunk_config |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | a data tree with an int attribute "max_num_bytes", an int attribute "dimensionality" (average result size by entity), a string attribute "location" ("Nodal" or"Elemental") is expected. |
| <strong>Pin 1000</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | producer_op1 |[`operator`](../../core-concepts/dpf-types.md#operator) |  |
| <strong>Pin 1001</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | output_pin_of_producer_op1 |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1002</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | input_pin_of_consumer_op1 |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1003</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span> | consumer_op1 |[`operator`](../../core-concepts/dpf-types.md#operator) |  |

## Outputs


| Output | Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
| **Pin 0** | chunks | | To connect to "producer_consumer_for_each" Operator on pin 0 |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |


## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mechanical::make_time_chunk_for_each

 **License**: None
 
