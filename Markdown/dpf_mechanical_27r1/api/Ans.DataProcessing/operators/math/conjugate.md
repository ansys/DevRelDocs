---
uid: Ans.DataProcessing.operators.math.conjugate
---

# *class* conjugate(fields_container: object = None, config: OperatorConfig = None)

Computes element-wise conjugate of field containers containing complex fields.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [conjugate operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/conjugate.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = conjugate()

op = conjugate(fields_container=my_fields_container)
```

## Inputs

### fields_container

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
