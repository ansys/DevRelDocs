---
uid: Ans.DataProcessing.operators.math.sin
---

# *class* sin(field: object = None, config: OperatorConfig = None)

Computes element-wise sine function on field data: sin(field[i]).

available inputs: `field` (Field)

available outputs: `field` (Field)

**DPF Framework Reference:** [sin operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sin.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = sin()

op = sin(field=my_field)
```

## Inputs

### field

Field containing numeric data for sine calculation

**Type:** *LinkableInput*

## Outputs

### field

Field with sine values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
