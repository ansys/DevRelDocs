---
uid: Ans.DataProcessing.operators.serialization.serializer
---

# *class* serializer(stream_type: object = None, file_path: object = None, any_input1: object = None, any_input2: object = None, config: OperatorConfig = None)

Take any input and serialize them in a file.

available inputs: `stream_type` (Int32), `file_path` (string), `any_input1` (Any), `any_input2` (Any)

available outputs: `file_path` (string)

**DPF Framework Reference:** [serializer operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/serialization/serializer.md)

**Parameters:**

* **stream_type**
* **file_path**
* **any_input1**
* **any_input2**
* **config**

**Example:**

```python
op = serializer()

op = serializer(stream_type=my_stream_type,file_path=my_file_path,any_input1=my_any_input1,any_input2=my_any_input2)
```

## Inputs

### stream_type

0 for ASCII (default), and 1 for binary

**Type:** *LinkableInput*

### file_path

**Type:** *LinkableInput*

### any_input1

any input

**Type:** *LinkableInput*

### any_input2

any input

**Type:** *LinkableInput*

## Outputs

### file_path

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
