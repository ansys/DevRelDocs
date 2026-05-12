---
uid: Ans.DataProcessing.operators.math.cplx_divide
---

# *class* cplx_divide(fields_containerA: object = None, fields_containerB: object = None, config: OperatorConfig = None)

Computes division between two field containers containing complex fields.

available inputs: `fields_containerA` (FieldsContainer), `fields_containerB` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [cplx_divide operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/cplx_divide.md)

**Parameters:**

* **fields_containerA**
* **fields_containerB**
* **config**

**Example:**

```python
op = cplx_divide()

op = cplx_divide(fields_containerA=my_fields_containerA,fields_containerB=my_fields_containerB)
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
