---
uid: Ans.DataProcessing.operators.utility.forward
---

# *class* forward(any1: object = None, any2: object = None, config: OperatorConfig = None)

Return all the inputs as outputs.

available inputs: `any1` (Any), `any2` (Any)

available outputs: `any1` (Any), `any2` (Any)

**DPF Framework Reference:** [forward operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/forward.md)

**Parameters:**

* **any1**
* **any2**
* **config**

**Example:**

```python
op = forward()

op = forward(any1=my_any1,any2=my_any2)
```

## Inputs

### any1

any type of input

**Type:** *LinkableInput*

### any

Deprecated alias of: any1

**Type:** *LinkableInput*

### any2

any type of input

**Type:** *LinkableInput*

## Outputs

### any1

same types as inputs

**Type:** *LinkableOutput*

### any

Deprecated alias of: any1

**Type:** *LinkableOutput*

### any2

same types as inputs

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
