---
category: utility
plugin: core
license: None
---

# utility:mechanical: make time freq support chunk

**Version: 0.0.0**

## Description

Splits a time freq support into chunks depending on evaluated result properties,mesh or field size and max number of bytes accepted and calls "make_for_each_range" to generate a range that can be consumed by the for_each operator

## Inputs

| Input | Name | Expected type(s) | Description |
|-------|-------|------------------|-------------|
| <strong>Pin 0</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  target_time_freq_support |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) | List of time freq support to potentially split in chunks. |
| <strong>Pin 1</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  operator_to_iterate |[`operator`](../../core-concepts/dpf-types.md#operator) | Operator that must be reconnected with the range values. |
| <strong>Pin 2</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  pin_index |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 7</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  abstract_meshed_region |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) | When a mesh is provided, the number of nodes (for "Nodal" results) or number of elements (for "Elemental" results) is used to compute the chunk. When a field is provided, its scoping size is used to compute the chunk. |
| <strong>Pin 200</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  chunk_config |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) | a data tree with an int attribute "max_num_bytes", an int attribute "dimensionality" (average result size by entity), a string attribute "location" ("Nodal" or"Elemental") is expected. |
| <strong>Pin 1000</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  producer_op1 |[`operator`](../../core-concepts/dpf-types.md#operator) |  |
| <strong>Pin 1001</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  output_pin_of_producer_op1 |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1002</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  input_pin_of_consumer_op1 |[`int32`](../../core-concepts/dpf-types.md#standard-types) |  |
| <strong>Pin 1003</strong> <br><span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  consumer_op1 |[`operator`](../../core-concepts/dpf-types.md#operator) |  |

## Outputs

| Output |  Name | Expected type(s) | Description |
|-------|------|------------------|-------------|
|  **Pin 0**| chunks | | To connect to "producer_consumer_for_each" Operator on pin 0 |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **mutex** |[`bool`](../../core-concepts/dpf-types.md#standard-types) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

 **Category**: utility

 **Plugin**: core

 **Scripting name**: None

 **Full name**: None

 **Internal name**: mechanical::make_time_freq_support_chunk_for_each

 **License**: None

## Examples

<details>
<summary>C++</summary>

```cpp
#include "dpf_api.h"

ansys::dpf::Operator op("mechanical::make_time_freq_support_chunk_for_each"); // operator instantiation
op.connect(0, my_target_time_freq_support);
op.connect(1, my_operator_to_iterate);
op.connect(2, my_pin_index);
op.connect(7, my_abstract_meshed_region);
op.connect(200, my_chunk_config);
op.connect(1000, my_producer_op1);
op.connect(1001, my_output_pin_of_producer_op1);
op.connect(1002, my_input_pin_of_consumer_op1);
op.connect(1003, my_consumer_op1);
 my_chunks = op.getOutput<>(0);
```
</details>

<details>
<summary>CPython</summary>

```python
import ansys.dpf.core as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.target_time_freq_support.connect(my_target_time_freq_support)
op.inputs.operator_to_iterate.connect(my_operator_to_iterate)
op.inputs.pin_index.connect(my_pin_index)
op.inputs.abstract_meshed_region.connect(my_abstract_meshed_region)
op.inputs.chunk_config.connect(my_chunk_config)
op.inputs.producer_op11.connect(my_producer_op11)
op.inputs.producer_op12.connect(my_producer_op12)
op.inputs.output_pin_of_producer_op11.connect(my_output_pin_of_producer_op11)
op.inputs.output_pin_of_producer_op12.connect(my_output_pin_of_producer_op12)
op.inputs.input_pin_of_consumer_op11.connect(my_input_pin_of_consumer_op11)
op.inputs.input_pin_of_consumer_op12.connect(my_input_pin_of_consumer_op12)
op.inputs.consumer_op11.connect(my_consumer_op11)
op.inputs.consumer_op12.connect(my_consumer_op12)
my_chunks = op.outputs.chunks()
```
</details>

<details>
<summary>IPython</summary>

```python
import mech_dpf
import Ans.DataProcessing as dpf

op = dpf.operators.utility.None() # operator instantiation
op.inputs.target_time_freq_support.Connect(my_target_time_freq_support)
op.inputs.operator_to_iterate.Connect(my_operator_to_iterate)
op.inputs.pin_index.Connect(my_pin_index)
op.inputs.abstract_meshed_region.Connect(my_abstract_meshed_region)
op.inputs.chunk_config.Connect(my_chunk_config)
op.inputs.producer_op1.Connect(my_producer_op1)
op.inputs.output_pin_of_producer_op1.Connect(my_output_pin_of_producer_op1)
op.inputs.input_pin_of_consumer_op1.Connect(my_input_pin_of_consumer_op1)
op.inputs.consumer_op1.Connect(my_consumer_op1)
my_chunks = op.outputs.chunks.GetData()
```
</details>
<br>

## Changelog

- Version 0.0.0: Initial release.