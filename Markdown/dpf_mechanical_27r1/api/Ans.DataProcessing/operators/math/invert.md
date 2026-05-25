---
uid: Ans.DataProcessing.operators.math.invert
---

# *class* invert(field: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE DIVIDE. Computes the element-wise and component-wise inverse of a field (1./x).

available inputs: `field` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [invert operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/invert.md)

**Parameters:**

* **field**
* **config**

**Example:**

```python
op = invert()

op = invert(field=my_field)
```

## Inputs

### field

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Field with inverse values (1/x) applied element-wise to input data

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
