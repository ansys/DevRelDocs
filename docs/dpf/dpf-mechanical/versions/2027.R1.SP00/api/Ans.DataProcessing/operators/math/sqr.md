---
uid: Ans.DataProcessing.operators.math.sqr
---

# *class* sqr(field: object = None, config: OperatorConfig = None)

Computes element-wise field[i]^2.

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [sqr operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/sqr.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = sqr()

op = sqr(field=my_field)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field with squared values applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
