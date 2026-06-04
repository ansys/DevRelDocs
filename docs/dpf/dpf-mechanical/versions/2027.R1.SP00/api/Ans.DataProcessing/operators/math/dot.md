---
uid: Ans.DataProcessing.operators.math.dot
---

# *class* dot(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE GENERALIZED INNER PRODUCT. Computes element - wise dot product between two vector fields. If one field's scoping has an 'overall' location, then this field's values are applied on the other field entirely.When using a constant or 'work_by_index', you can use 'inplace' to reuse one of the fields, but only in the case where both fields are scalar.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [dot operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/dot.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = dot()

op = dot(fieldA=my_fieldA,fieldB=my_fieldB)
```

## Inputs

### fieldA

field or fields container with only one field is expected

**Type:** *LinkableInput*

### fieldB

field or fields container with only one field is expected

**Type:** *LinkableInput*

## Outputs

### field

Scalar field containing the dot product values between corresponding vectors

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
