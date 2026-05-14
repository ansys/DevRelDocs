---
uid: Ans.DataProcessing.operators.math.sqrt
---

# *class* sqrt(field: object = None, config: OperatorConfig = None)

Computes element-wise square root function on field data: sqrt(field[i]).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [sqrt operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqrt.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = sqrt()

op = sqrt(field=my_field)
```

## Inputs

### field

Field or fields container containing numeric data for square root calculation

**Type:** *LinkableInput*

## Outputs

### field

Field with square root values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
