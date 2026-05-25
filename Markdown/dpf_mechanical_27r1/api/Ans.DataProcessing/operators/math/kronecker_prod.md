---
uid: Ans.DataProcessing.operators.math.kronecker_prod
---

# *class* kronecker_prod(fieldA: object = None, fieldB: object = None, config: OperatorConfig = None)

Computes element-wise Kronecker product between two tensor fields.

available inputs: `fieldA` (Field, FieldsContainer), `fieldB` (Field, FieldsContainer)

available outputs: `field` (Field)

**DPF Framework Reference:** [kronecker_prod operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/kronecker_prod.md)

**Parameters:**

* **fieldA**
* **fieldB**
* **config**

**Example:**

```python
op = kronecker_prod()

op = kronecker_prod(fieldA=my_fieldA,fieldB=my_fieldB)
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
