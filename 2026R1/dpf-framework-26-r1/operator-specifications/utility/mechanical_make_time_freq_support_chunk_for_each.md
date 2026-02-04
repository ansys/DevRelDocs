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

| Pin number | Name | Expected type(s) |
|-------|-------|------------------|
| <strong>0</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [target_time_freq_support](#input_0) |[`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support) |
| <strong>1</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [operator_to_iterate](#input_1) |[`operator`](../../core-concepts/dpf-types.md#operator) |
| <strong>2</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [pin_index](#input_2) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>7</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [abstract_meshed_region](#input_7) |[`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field) |
| <strong>200</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [chunk_config](#input_200) |[`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree) |
| <strong>1000</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [producer_op1](#input_1000) |[`operator`](../../core-concepts/dpf-types.md#operator) |
| <strong>1001</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [output_pin_of_producer_op1](#input_1001) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1002</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [input_pin_of_consumer_op1](#input_1002) |[`int32`](../../core-concepts/dpf-types.md#standard-types) |
| <strong>1003</strong> <span style="background-color:#d93025; color:white; padding:2px 6px; border-radius:3px; font-size:0.75em;">Required</span>|  [consumer_op1](#input_1003) |[`operator`](../../core-concepts/dpf-types.md#operator) |


<a id="input_0"></a>
### target_time_freq_support (Pin 0)

- **Required:** Yes
- **Expected type(s):** [`time_freq_support`](../../core-concepts/dpf-types.md#time-freq-support)

List of time freq support to potentially split in chunks.

<a id="input_1"></a>
### operator_to_iterate (Pin 1)

- **Required:** Yes
- **Expected type(s):** [`operator`](../../core-concepts/dpf-types.md#operator)

Operator that must be reconnected with the range values.

<a id="input_2"></a>
### pin_index (Pin 2)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_7"></a>
### abstract_meshed_region (Pin 7)

- **Required:** Yes
- **Expected type(s):** [`abstract_meshed_region`](../../core-concepts/dpf-types.md#meshed-region), [`field`](../../core-concepts/dpf-types.md#field)

When a mesh is provided, the number of nodes (for "Nodal" results) or number of elements (for "Elemental" results) is used to compute the chunk. When a field is provided, its scoping size is used to compute the chunk.

<a id="input_200"></a>
### chunk_config (Pin 200)

- **Required:** Yes
- **Expected type(s):** [`abstract_data_tree`](../../core-concepts/dpf-types.md#data-tree)

a data tree with an int attribute "max_num_bytes", an int attribute "dimensionality" (average result size by entity), a string attribute "location" ("Nodal" or"Elemental") is expected.

<a id="input_1000"></a>
### producer_op1 (Pin 1000)

- **Required:** Yes
- **Expected type(s):** [`operator`](../../core-concepts/dpf-types.md#operator)



<a id="input_1001"></a>
### output_pin_of_producer_op1 (Pin 1001)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1002"></a>
### input_pin_of_consumer_op1 (Pin 1002)

- **Required:** Yes
- **Expected type(s):** [`int32`](../../core-concepts/dpf-types.md#standard-types)



<a id="input_1003"></a>
### consumer_op1 (Pin 1003)

- **Required:** Yes
- **Expected type(s):** [`operator`](../../core-concepts/dpf-types.md#operator)




## Outputs

| Pin number |  Name | Expected type(s) |
|-------|------|------------------|
|  **0**| [chunks](#output_0) | |


<a id="output_0"></a>
### chunks (Pin 0)

- **Expected type(s):** 

To connect to "producer_consumer_for_each" Operator on pin 0


## Configurations


### mutex

- **Expected type(s):** [`bool`](../../core-concepts/dpf-types.md#standard-types)
- **Default value:** false

If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads.



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