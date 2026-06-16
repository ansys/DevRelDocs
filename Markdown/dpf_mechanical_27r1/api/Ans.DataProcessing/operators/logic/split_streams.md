---
uid: Ans.DataProcessing.operators.logic.split_streams
---

# *class* split_streams(streams: object = None, output_count: object = None, config: OperatorConfig = None)

Splits a Streams into multiple coherent streams, actual number of outputs is always less or equal to the given desired number of ouputs.

available inputs: `streams` (StreamsContainer), `output_count` (Int32)

available outputs: `output_count` (Int32), `outputs1` (StreamsContainer), `outputs2` (StreamsContainer)

**DPF Framework Reference:** [split_streams operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/logic/split_streams.md)

**Parameters:**

* **streams**
* **output_count**
* **config**

**Example:**

```python
op = split_streams()

op = split_streams(streams=my_streams,output_count=my_output_count)
```

## Inputs

### streams

Streams to split.

**Type:** *LinkableInput*

### output_count

Number of desired outputs.

**Type:** *LinkableInput*

## Outputs

### output_count

Actual number of outputs.

**Type:** *LinkableOutput*

### outputs1

Streams outputs.

**Type:** *LinkableOutput*

### outputs2

Streams outputs.

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
