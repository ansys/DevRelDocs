---
uid: Ans.DataProcessing.operators.utility.for_each
---

# *class* for_each(iterable: object = None, iterable_values: object = None, pin_index: object = None, forward1: object = None, forward2: object = None, config: OperatorConfig = None)

Allows to write a loop over a chunk of operators.

available inputs: `iterable` (Any), `iterable_values` (Any) (optional), `pin_index` (Int32) (optional), `forward1` (Any), `forward2` (Any)

available outputs: `empty` (Any), `output1` (Any), `output2` (Any)

**DPF Framework Reference:** [for_each operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/utility/for_each.md)

**Parameters:**

* **iterable**
* **iterable_values**
* **pin_index**
* **forward1**
* **forward2**
* **config**

**Example:**

```python
op = for_each()

op = for_each(iterable=my_iterable,iterable_values=my_iterable_values,pin_index=my_pin_index,forward1=my_forward1,forward2=my_forward2)
```

## Inputs

### iterable

Either the result of the make_iterable_info operator, or the operator that must be incremented.

**Type:** *LinkableInput*

### iterable_values

**Type:** *LinkableInput*

### pin_index

**Type:** *LinkableInput*

### forward1

**Type:** *LinkableInput*

### forward2

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
