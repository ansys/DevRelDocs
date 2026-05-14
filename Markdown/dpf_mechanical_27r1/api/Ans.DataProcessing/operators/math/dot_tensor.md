---
uid: Ans.DataProcessing.operators.math.dot_tensor
---

# *class* dot_tensor(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

DEPRECATED, PLEASE USE GENERALIZED INNER PRODUCT. Computes entity-wise dot product between two tensor fields.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [dot_tensor operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/dot_tensor.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = dot_tensor()

op = dot_tensor(fieldA=my_fieldA,fieldB=my_fieldB)
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

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
