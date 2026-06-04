---
uid: Ans.DataProcessing.operators.utility.producer_consumer_for_each
---

# *class* producer_consumer_for_each(producer_consumer_iterableq: object = None, forward1: object = None, forward2: object = None, config: OperatorConfig = None)

Allows to write a loop over operators by connecting data to iterate and by requesting the incrementally output merged.The chain of Operators are split into a first part: the producers and a second part: the consumers. These 2 parts will run asynchronously on 2 threads.

available inputs: `producer_consumer_iterableq` (Any), `forward1` (Any), `forward2` (Any)

available outputs: `empty` (Any), `output1` (Any), `output2` (Any)

**DPF Framework Reference:** [producer_consumer_for_each operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/producer_consumer_for_each.md)

**Parameters:**

* **producer_consumer_iterableq**
* **forward1**
* **forward2**
* **config**

**Example:**

```python
op = producer_consumer_for_each()

op = producer_consumer_for_each(producer_consumer_iterableq=my_producer_consumer_iterableq,forward1=my_forward1,forward2=my_forward2)
```

## Inputs

### producer_consumer_iterableq

The result of the make_producer_consumer_for_each_iterator operator.

**Type:** *LinkableInput*

### forward1

output of the last operators of the workflow

**Type:** *LinkableInput*

### forward2

output of the last operators of the workflow

**Type:** *LinkableInput*

## Outputs

### empty

**Type:** *LinkableOutput*

### output1

**Type:** *LinkableOutput*

### output2

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
