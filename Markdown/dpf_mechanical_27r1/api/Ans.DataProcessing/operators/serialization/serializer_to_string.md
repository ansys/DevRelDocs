---
uid: Ans.DataProcessing.operators.serialization.serializer_to_string
---

# *class* serializer_to_string(stream_type: object = None, any_input1: object = None, any_input2: object = None, config: OperatorConfig = None)

Take any input and serialize them in a string.

available inputs: `stream_type` (Int32), `any_input1` (Any), `any_input2` (Any)

available outputs: `nof_chunks` (Int32), `serialized_string1` (string), `serialized_string2` (string)

**DPF Framework Reference:** [serializer_to_string operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/serializer_to_string.md)

**Parameters:**

* **stream_type**
* **any_input1**
* **any_input2**
* **config**

**Example:**

```python
op = serializer_to_string()

op = serializer_to_string(stream_type=my_stream_type,any_input1=my_any_input1,any_input2=my_any_input2)
```

## Inputs

### stream_type

0 for string (default), 1 for binary, 2 for binary with chunked output (the output string will be returned in several chunks to prevent string memory overflows).

**Type:** *LinkableInput*

### any_input1

any input

**Type:** *LinkableInput*

### any_input2

any input

**Type:** *LinkableInput*

## Outputs

### nof_chunks

Number of chunks when mode passed to input pin(-1) = 2.

**Type:** *LinkableOutput*

### serialized_string1

**Type:** *LinkableOutput*

### serialized_string2

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
