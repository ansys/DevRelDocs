---
uid: Ans.DataProcessing.operators.utility.split_in_for_each_range
---

# *class* split_in_for_each_range(iterable: object = None, operator_to_iterate: object = None, pin_index: object = None, scoping: object = None, chunk_size: object = None, config: OperatorConfig = None)

Split a scoping into several pieces so you can iterate it with a for_each loop.

available inputs: `iterable` (Any) (optional), `operator_to_iterate` (Operator), `pin_index` (Int32), `scoping` (Scoping), `chunk_size` (Int32)

available outputs: `output` (Any)

**DPF Framework Reference:** [split_in_for_each_range operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/split_in_for_each_range.md)

**Parameters:**

* **iterable**
* **operator_to_iterate**
* **pin_index**
* **scoping**
* **chunk_size**
* **config**

**Example:**

```python
op = split_in_for_each_range()

op = split_in_for_each_range(iterable=my_iterable,operator_to_iterate=my_operator_to_iterate,pin_index=my_pin_index,scoping=my_scoping,chunk_size=my_chunk_size)
```

## Inputs

### iterable

Iterable that can be combined with the one currently generated.

**Type:** *LinkableInput*

### operator_to_iterate

Operator that must be reconnected with the range values.

**Type:** *LinkableInput*

### pin_index

**Type:** *LinkableInput*

### scoping

**Type:** *LinkableInput*

### chunk_size

**Type:** *LinkableInput*

## Outputs

### output

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
