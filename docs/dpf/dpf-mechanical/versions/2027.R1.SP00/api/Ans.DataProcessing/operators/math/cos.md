---
uid: Ans.DataProcessing.operators.math.cos
---

# *class* cos(field: object = None, config: OperatorConfig = None)

Computes element-wise cosine function on field data: cos(field[i]).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [cos operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cos.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = cos()

op = cos(field=my_field)
```

## Inputs

### field

Field or fields container containing numeric data for cosine calculation

**Type:** *LinkableInput*

## Outputs

### field

Field with cosine values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
