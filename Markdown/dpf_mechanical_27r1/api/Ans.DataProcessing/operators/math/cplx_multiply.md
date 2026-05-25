---
uid: Ans.DataProcessing.operators.math.cplx_multiply
---

# *class* cplx_multiply(fields_containerA: object = None, fields_containerB: object = None, config: OperatorConfig = None)

Computes multiplication between two field containers containing complex fields.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cplx_multiply operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_multiply.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **config**

**Example:**

```python
op = cplx_multiply()

op = cplx_multiply(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB)
```

## Inputs

### fields_containerA

**Type:** *LinkableInput*

### fields_containerB

**Type:** *LinkableInput*

## Outputs

### fields_container

**Type:** *LinkableOutput*

## Methods

## Properties

#### *property* inputs: InputSpec

*get/set*

#### *property* outputs: OutputSpec

*get/set*

#### *property* defaultConfig: Config

*get*
