---
uid: Ans.DataProcessing.operators.math.matrix_inverse
---

# *class* matrix_inverse(fields_container: object = None, config: OperatorConfig = None)

Computes the complex matrix inverse for each field in the given fields container.

available inputs: `fields_container` (FieldsContainer)

available outputs: `fields_container` (FieldsContainer)

**DPF Framework Reference:** [matrix_inverse operator specification](https://developer.ansys.com/docs/dpf-framework-2027-r1/operator-specifications/math/matrix_inverse.md)

**Parameters:**

* **fields_container**
* **config**

**Example:**

```python
op = matrix_inverse()

op = matrix_inverse(fields_container=my_fields_container)
```

## Inputs

### fields_container

fields_container

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
