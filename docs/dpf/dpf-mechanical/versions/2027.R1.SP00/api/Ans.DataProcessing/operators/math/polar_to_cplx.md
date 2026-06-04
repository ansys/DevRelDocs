---
uid: Ans.DataProcessing.operators.math.polar_to_cplx
---

# *class* polar_to_cplx(fields_container: object = None, config: OperatorConfig = None)

Converts a complex number from polar form to complex.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [polar_to_cplx operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/polar_to_cplx.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = polar_to_cplx()

op = polar_to_cplx(fields_container=my_fields_container)
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
