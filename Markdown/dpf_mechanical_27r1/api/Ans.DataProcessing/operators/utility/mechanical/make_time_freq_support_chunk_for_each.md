---
uid: Ans.DataProcessing.operators.utility.mechanical.make_time_freq_support_chunk_for_each
---

# *class* make_time_freq_support_chunk_for_each(target_time_freq_support: object = None, operator_to_iterate: object = None, pin_index: object = None, meshed_region: object = None, chunk_config: object = None, producer_op11: object = None, producer_op12: object = None, output_pin_of_producer_op12: object = None, input_pin_of_consumer_op12: object = None, consumer_op12: object = None, config: OperatorConfig = None)

Splits a time freq support into chunks depending on evaluated result properties,mesh or field size and max number of bytes accepted and calls "make_for_each_range" to generate a range that can be consumed by the for_each operator

available inputs: `target_time_freq_support` (TimeFreqSupport), `operator_to_iterate` (Operator), `pin_index` (Int32), `meshed_region` (MeshedRegion, Field), `chunk_config` (DataTree), `producer_op11` (Operator), `producer_op12` (Operator), `output_pin_of_producer_op12` (Int32), `input_pin_of_consumer_op12` (Int32), `consumer_op12` (Operator)

available outputs: `chunks` (Any)

**DPF Framework Reference:** [make_time_freq_support_chunk_for_each operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/make_time_freq_support_chunk_for_each.md)

**Parameters:**

* **target_time_freq_support**
* **operator_to_iterate**
* **pin_index**
* **meshed_region**
* **chunk_config**
* **producer_op11**
* **producer_op12**
* **output_pin_of_producer_op12**
* **input_pin_of_consumer_op12**
* **consumer_op12**
* **config**

**Example:**

```python
op = make_time_freq_support_chunk_for_each()

op = make_time_freq_support_chunk_for_each(target_time_freq_support=my_target_time_freq_support,operator_to_iterate=my_operator_to_iterate,pin_index=my_pin_index,meshed_region=my_meshed_region,chunk_config=my_chunk_config,producer_op11=my_producer_op11,producer_op12=my_producer_op12,output_pin_of_producer_op12=my_output_pin_of_producer_op12,input_pin_of_consumer_op12=my_input_pin_of_consumer_op12,consumer_op12=my_consumer_op12)
```

## Inputs

### target_time_freq_support

List of time freq support to potentially split in chunks.

**Type:** *LinkableInput*

### operator_to_iterate

Operator that must be reconnected with the range values.

**Type:** *LinkableInput*

### pin_index

**Type:** *LinkableInput*

### meshed_region

When a mesh is provided, the number of nodes (for "Nodal" results) or number of elements (for "Elemental" results) is used to compute the chunk. When a field is provided, its scoping size is used to compute the chunk.

**Type:** *LinkableInput*

### chunk_config

a data tree with an int attribute "max_num_bytes", an int attribute "dimensionality" (average result size by entity), a string attribute "location" ("Nodal" or"Elemental") is expected.

**Type:** *LinkableInput*

### producer_op11

**Type:** *LinkableInput*

### producer_op12

**Type:** *LinkableInput*

### output_pin_of_producer_op12

**Type:** *LinkableInput*

### input_pin_of_consumer_op12

**Type:** *LinkableInput*

### consumer_op12

**Type:** *LinkableInput*

## Outputs

### chunks

To connect to "producer_consumer_for_each" Operator on pin 0

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
